import React from 'react';
import MultiFilePicker from '../uploader/MultiFilePicker';
import DropZone from '../uploader/DropZone';
import ImageUploaderButton from '../uploader/ImageUploaderButton';

type Block = {
  id: string;
  kind: string;
  [key: string]: any;
};

type EditorPanelProps = {
  block: Block;
  updateBlock: (block: Block) => void;
};

export default function EditorPanel({ block, updateBlock }: EditorPanelProps) {
  switch (block.kind) {
    case 'image_carousel': {
      const b = block as any;
      const items = b.items || [];
      
      function setItem(i: number, patch: any) {
        const next = items.map((it: any, idx: number) => idx === i ? { ...it, ...patch } : it);
        updateBlock({ ...b, items: next });
      }
      
      function addItem(url?: string) { 
        updateBlock({ ...b, items: [...items, { src: url || '', alt: '', caption: '' }] }); 
      }
      
      function addMany(urls: string[]) { 
        updateBlock({ ...b, items: [...items, ...urls.map(u => ({ src: u, alt: '', caption: '' }))] }); 
      }
      
      function removeAt(i: number) { 
        updateBlock({ ...b, items: items.filter((_: any, idx: number) => idx !== i) }); 
      }
      
      function move(i: number, to: number) {
        if (to < 0 || to >= items.length) return;
        const next = items.slice(); 
        const [it] = next.splice(i, 1); 
        next.splice(to, 0, it);
        updateBlock({ ...b, items: next });
      }
      
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <DropZone multiple onBatchUploaded={addMany} text="Drop images to add to carousel" />
            <MultiFilePicker label="Add Multiple" onBatchUploaded={addMany} />
            <button type="button" className="px-3 py-1.5 border rounded" onClick={() => addItem()}>Add Empty</button>
          </div>
          <div className="space-y-3">
            {items.map((it: any, i: number) => (
              <div key={i} className="border rounded p-3 space-y-2">
                <div className="flex items-start gap-3">
                  <img src={it.src || 'https://placehold.co/160x100'} className="w-40 h-24 object-cover rounded border" />
                  <div className="flex-1 space-y-2">
                    <label className="block text-sm">Image URL</label>
                    <input className="w-full border rounded px-2 py-1" value={it.src || ''} onChange={e => setItem(i, { src: e.target.value })} />
                    <ImageUploaderButton label="Replace Image" onUploaded={(url) => setItem(i, { src: url })} />
                    <label className="block text-sm">Alt</label>
                    <input className="w-full border rounded px-2 py-1" value={it.alt || ''} onChange={e => setItem(i, { alt: e.target.value })} />
                    <label className="block text-sm">Caption</label>
                    <input className="w-full border rounded px-2 py-1" value={it.caption || ''} onChange={e => setItem(i, { caption: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button type="button" className="px-2 py-1 border rounded" onClick={() => move(i, i - 1)} disabled={i === 0}>↑</button>
                    <button type="button" className="px-2 py-1 border rounded" onClick={() => move(i, i + 1)} disabled={i === items.length - 1}>↓</button>
                    <button type="button" className="px-2 py-1 border rounded text-red-600" onClick={() => removeAt(i)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'image_gallery': {
      const b = block as any;
      const items = b.items || [];
      
      function setItem(i: number, patch: any) {
        const next = items.map((it: any, idx: number) => idx === i ? { ...it, ...patch } : it);
        updateBlock({ ...b, items: next });
      }
      
      function addItem(url?: string) { 
        updateBlock({ ...b, items: [...items, { src: url || '', alt: '', caption: '' }] }); 
      }
      
      function addMany(urls: string[]) { 
        updateBlock({ ...b, items: [...items, ...urls.map(u => ({ src: u, alt: '', caption: '' }))] }); 
      }
      
      function removeAt(i: number) { 
        updateBlock({ ...b, items: items.filter((_: any, idx: number) => idx !== i) }); 
      }
      
      function move(i: number, to: number) {
        if (to < 0 || to >= items.length) return;
        const next = items.slice(); 
        const [it] = next.splice(i, 1); 
        next.splice(to, 0, it);
        updateBlock({ ...b, items: next });
      }
      
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="text-sm">Columns</label>
            <select className="border rounded px-2 py-1" value={b.columns || 3} onChange={e => updateBlock({ ...b, columns: Number(e.target.value) })}>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <DropZone multiple onBatchUploaded={addMany} text="Drop images to add to gallery" />
            <MultiFilePicker label="Add Multiple" onBatchUploaded={addMany} />
            <button type="button" className="px-3 py-1.5 border rounded" onClick={() => addItem()}>Add Empty</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((it: any, i: number) => (
              <div key={i} className="border rounded p-3 space-y-2">
                <img src={it.src || 'https://placehold.co/320x200'} className="w-full h-32 object-cover rounded border" />
                <label className="block text-sm">Image URL</label>
                <input className="w-full border rounded px-2 py-1" value={it.src || ''} onChange={e => setItem(i, { src: e.target.value })} />
                <ImageUploaderButton label="Replace Image" onUploaded={(url) => setItem(i, { src: url })} />
                <label className="block text-sm">Alt</label>
                <input className="w-full border rounded px-2 py-1" value={it.alt || ''} onChange={e => setItem(i, { alt: e.target.value })} />
                <label className="block text-sm">Caption</label>
                <input className="w-full border rounded px-2 py-1" value={it.caption || ''} onChange={e => setItem(i, { caption: e.target.value })} />
                <div className="flex items-center gap-2">
                  <button type="button" className="px-2 py-1 border rounded" onClick={() => move(i, i - 1)} disabled={i === 0}>↑</button>
                  <button type="button" className="px-2 py-1 border rounded" onClick={() => move(i, i + 1)} disabled={i === items.length - 1}>↓</button>
                  <button type="button" className="px-2 py-1 border rounded text-red-600" onClick={() => removeAt(i)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    default:
      return (
        <div className="p-4 text-gray-500">
          No editor available for block type: {block.kind}
        </div>
      );
  }
}