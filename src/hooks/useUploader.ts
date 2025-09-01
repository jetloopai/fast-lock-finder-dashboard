import { useCallback, useMemo, useRef, useState } from 'react';
import { supabase } from '../integrations/supabase/client';

export type UploadOpts = {
  bucket?: string;     // default 'media'
  pathPrefix?: string; // default 'uploads/'
  concurrency?: number; // default 3
};

export function useUploader(opts: UploadOpts = {}) {
  const bucket = opts.bucket || 'media';
  const prefix = opts.pathPrefix ?? 'uploads/';
  const concurrency = Math.max(1, opts.concurrency ?? 3);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string|undefined>();

  const [batchUploading, setBatchUploading] = useState(false);
  const [batchDone, setBatchDone] = useState(0);
  const batchTotalRef = useRef(0);

  async function uploadFile(file: File): Promise<string> {
    const ext = file.name.split('.').pop() || 'bin';
    const name = `${crypto.randomUUID()}.${ext}`;
    const path = `${prefix}${name}`;
    const { error: upErr } = await supabase.storage.from(bucket).upload(path, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || 'application/octet-stream',
    });
    if (upErr) throw upErr;
    return `${supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl}`;
  }

  const uploadFiles = useCallback(async (files: File[], onProgress?: (done:number,total:number)=>void): Promise<string[]> => {
    setError(undefined);
    setBatchUploading(true);
    setBatchDone(0);
    batchTotalRef.current = files.length;
    onProgress?.(0, files.length);

    const q = files.slice(); // queue
    const results: string[] = [];
    let running = 0;
    let idx = 0;

    async function runNext(): Promise<void> {
      if (!q.length) return;
      const file = q.shift()!;
      running++;
      try {
        const url = await uploadFile(file);
        results.push(url);
      } catch (e: any) {
        // capture error but continue other uploads
        setError(e?.message || 'Upload failed');
      } finally {
        running--;
        idx++;
        setBatchDone(idx);
        onProgress?.(idx, batchTotalRef.current);
        if (q.length) await runNext();
      }
    }

    // start up to 'concurrency' workers
    const workers = Array(Math.min(concurrency, files.length)).fill(0).map(() => runNext());
    await Promise.all(workers);

    setBatchUploading(false);
    return results;
  }, [bucket, prefix, concurrency]);

  const batchStatus = useMemo(() => `${batchDone}/${batchTotalRef.current || 0}`, [batchDone]);

  async function uploadFileWithState(file: File): Promise<string> {
    setUploading(true);
    setError(undefined);
    try {
      return await uploadFile(file);
    } catch (e: any) {
      setError(e?.message || 'Upload failed');
      throw e;
    } finally {
      setUploading(false);
    }
  }

  return {
    // single
    uploading,
    uploadFile: uploadFileWithState,
    // batch
    batchUploading,
    batchStatus,
    uploadFiles,
    // errors
    error,
  };
}