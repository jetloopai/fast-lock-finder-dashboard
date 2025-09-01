import { useRef, useState } from 'react';
import { useUploader } from '../../hooks/useUploader';

export default function MultiFilePicker({
  label = 'Add Images',
  onBatchUploaded,
}: {
  label?: string;
  onBatchUploaded: (urls: string[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement|null>(null);
  const { batchUploading, batchStatus, uploadFiles, error } = useUploader({ bucket: 'media', pathPrefix: 'images/', concurrency: 3 });
  const [localBusy, setLocalBusy] = useState(false);

  async function pick(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setLocalBusy(true);
    try {
      const urls = await uploadFiles(files);
      if (urls.length) onBatchUploaded(urls);
    } finally {
      setLocalBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="px-3 py-1.5 rounded bg-gray-900 text-white disabled:opacity-60"
        disabled={batchUploading || localBusy}
      >
        {batchUploading || localBusy ? `Uploading ${batchStatus}` : label}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={pick}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}