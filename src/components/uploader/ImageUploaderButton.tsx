import { useRef, useState } from 'react';
import { useUploader } from '../../hooks/useUploader';

export default function ImageUploaderButton({
  label = 'Upload Image',
  onUploaded,
}: {
  label?: string;
  onUploaded: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement|null>(null);
  const { uploading, uploadFile, error } = useUploader({ bucket: 'media', pathPrefix: 'images/' });
  const [localBusy, setLocalBusy] = useState(false);

  async function pick(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setLocalBusy(true);
    try {
      const url = await uploadFile(files[0]);
      onUploaded(url);
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
        disabled={uploading || localBusy}
      >
        {uploading || localBusy ? 'Uploading...' : label}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={pick}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}