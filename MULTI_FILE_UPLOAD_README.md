# Multi-File Upload System for Studio

This implementation adds multi-file selection and batch upload capabilities for Image Gallery and Image Carousel blocks in the Studio.

## Features

- **Multi-file Selection**: "Add Multiple" button opens a file picker for selecting multiple images
- **Drag & Drop**: Drop multiple files directly into the DropZone for batch upload
- **Concurrent Uploads**: Uploads up to 3 files simultaneously for optimal performance
- **Progress Tracking**: Shows "Uploading X/Y" progress during batch operations
- **Batch Insertion**: All uploaded images are automatically added as new items
- **Backward Compatibility**: Single "Replace Image" functionality remains unchanged

## Components Created/Modified

### 1. `src/hooks/useUploader.ts`
- **New hook** that manages both single and batch file uploads
- Supports configurable concurrency (default: 3 concurrent uploads)
- Provides progress tracking and error handling
- Uses Supabase storage for file uploads

### 2. `src/components/uploader/MultiFilePicker.tsx`
- **New component** for selecting multiple files
- Renders a button that opens a hidden file input with `multiple` attribute
- Shows upload progress during batch operations

### 3. `src/components/uploader/DropZone.tsx`
- **New component** for drag & drop file uploads
- Supports both single and multiple file drops
- Configurable via `multiple` prop
- Shows upload progress and handles errors

### 4. `src/components/uploader/ImageUploaderButton.tsx`
- **New component** for single file uploads
- Maintains backward compatibility
- Used for replacing individual images

### 5. `src/components/studio/EditorPanel.tsx`
- **New component** that provides editing interfaces
- Handles `image_carousel` and `image_gallery` block types
- Integrates all upload components with proper state management

### 6. `src/lib/supabase.ts`
- **New utility file** providing Supabase storage helpers
- Exports `publicFileUrl` function for generating public URLs

## Usage

### Accessing the Studio
Navigate to `/admin/studio` in the admin panel to access the multi-file upload functionality.

### Image Carousel Editor
- **DropZone**: Drag multiple images to add them all at once
- **Add Multiple**: Click to select multiple files from file picker
- **Add Empty**: Add an empty item to fill in manually
- **Individual Controls**: Move, edit, or remove individual items

### Image Gallery Editor
- **Columns**: Configure grid layout (2, 3, or 4 columns)
- **DropZone**: Drag multiple images to add them all at once
- **Add Multiple**: Click to select multiple files from file picker
- **Add Empty**: Add an empty item to fill in manually
- **Individual Controls**: Move, edit, or remove individual items

## Configuration

### Environment Variables
Ensure these environment variables are set:
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Storage Bucket
Create a public `media` bucket in your Supabase project with the following policy:
```sql
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Authenticated Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
```

### Upload Options
The `useUploader` hook accepts these options:
```typescript
{
  bucket?: string;        // default: 'media'
  pathPrefix?: string;    // default: 'uploads/'
  concurrency?: number;   // default: 3
}
```

## Technical Details

### Concurrency Control
- Uses a worker pool pattern to limit concurrent uploads
- Default limit of 3 concurrent uploads prevents overwhelming the network
- Configurable via the `concurrency` option

### Progress Tracking
- Tracks completed vs. total uploads
- Updates UI in real-time during batch operations
- Provides progress callback for custom progress indicators

### Error Handling
- Individual upload failures don't stop the entire batch
- Errors are captured and displayed inline
- Failed uploads are logged but don't prevent successful ones

### File Management
- Generates unique filenames using `crypto.randomUUID()`
- Preserves original file extensions
- Uploads to configurable path prefixes

## File Structure
```
src/
├── hooks/
│   └── useUploader.ts              # Upload management hook
├── components/
│   ├── uploader/
│   │   ├── MultiFilePicker.tsx     # Multi-file selection
│   │   ├── DropZone.tsx            # Drag & drop zone
│   │   └── ImageUploaderButton.tsx # Single file upload
│   └── studio/
│       ├── EditorPanel.tsx         # Block editing interface
│       └── StudioDemo.tsx          # Demo/testing component
└── lib/
    └── supabase.ts                 # Supabase utilities
```

## Testing

1. **Build the project**: `npm run build`
2. **Start dev server**: `npm run dev`
3. **Navigate to**: `/admin/studio`
4. **Test multi-file uploads** using both the button and drag & drop
5. **Verify progress tracking** shows "Uploading X/Y" during batch operations
6. **Check that all uploaded images** appear as new items in the carousel/gallery

## Notes

- **Supabase Storage**: Requires a public `media` bucket with proper policies
- **File Types**: Currently accepts all image types (`image/*`)
- **Performance**: Concurrent uploads are limited to prevent network congestion
- **Error Handling**: Graceful degradation when uploads fail
- **State Management**: All changes are managed through the `updateBlock` callback

## Future Enhancements

- **File Type Validation**: Add support for specific image formats
- **Image Optimization**: Client-side resizing and compression
- **Upload Queue**: Persistent upload queue with retry logic
- **Progress Bars**: Visual progress indicators with percentage
- **Batch Operations**: Bulk edit/delete operations for multiple items