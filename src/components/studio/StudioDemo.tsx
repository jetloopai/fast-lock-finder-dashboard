import React, { useState } from 'react';
import EditorPanel from './EditorPanel';

// Demo component to test the EditorPanel functionality
export default function StudioDemo() {
  const [carouselBlock, setCarouselBlock] = useState({
    id: 'carousel-1',
    kind: 'image_carousel',
    items: [
      { src: 'https://placehold.co/400x300', alt: 'Sample 1', caption: 'First image' },
      { src: 'https://placehold.co/400x300', alt: 'Sample 2', caption: 'Second image' }
    ]
  });

  const [galleryBlock, setGalleryBlock] = useState({
    id: 'gallery-1',
    kind: 'image_gallery',
    columns: 3,
    items: [
      { src: 'https://placehold.co/400x300', alt: 'Gallery 1', caption: 'Gallery image 1' },
      { src: 'https://placehold.co/400x300', alt: 'Gallery 2', caption: 'Gallery image 2' }
    ]
  });

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Studio Demo - Multi-File Upload</h1>
      
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Image Carousel Editor</h2>
        <EditorPanel 
          block={carouselBlock} 
          updateBlock={setCarouselBlock} 
        />
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Image Gallery Editor</h2>
        <EditorPanel 
          block={galleryBlock} 
          updateBlock={setGalleryBlock} 
        />
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Current Block States</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Carousel Block:</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify(carouselBlock, null, 2)}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Gallery Block:</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify(galleryBlock, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}