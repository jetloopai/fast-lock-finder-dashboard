import { useCallback, useState } from 'react';
import { useUploader } from '../../hooks/useUploader';

export default function DropZone({
  onUploaded,
  onBatchUploaded,
  text = 'Drop images here or click to upload',
  multiple = true,
}: {
  onUploaded?: (url: string) => void;
  onBatchUploaded?: (urls: string[]) => void;
  text?: string;
  multiple?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const { batchUploading, batchStatus, uploadFiles, uploading, uploadFile, error } = useUploader({ bucket: 'media', pathPrefix: 'images/' });

  const handleFiles = useCallback(async (files: FileList) => {
    const arr = Array.from(files || []);
    if (!arr.length) return;
    if (multiple && onBatchUploaded) {
      const urls = await uploadFiles(arr);
      if (urls.length) onBatchUploaded(urls);
    } else if (onUploaded) {
      const url = await uploadFile(arr[0]);
      onUploaded(url);
    }
  }, [multiple, onBatchUploaded, onUploaded, uploadFiles, uploadFile]);

  const onDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation(); setHover(false);
    await handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    await handleFiles(e.target.files!);
    e.currentTarget.value = '';
  }

  const busy = uploading || batchUploading;

  return (
    <label
      onDragOver={(e)=>{e.preventDefault(); setHover(true);}}
      onDragLeave={()=>setHover(false)}
      onDrop={onDrop}
      className={`block border-2 border-dashed rounded p-4 text-sm text-center cursor-pointer ${hover? 'bg-gray-50 border-gray-800':'border-gray-300'}`}
    >
      <input type="file" accept="image/*" className="hidden" multiple={multiple} onChange={onPick} />
      {busy ? `Uploading ${batchStatus}` : text}
      {error && <div className="text-xs text-red-600 mt-1">{error}</div>}
    </label>
  );
}