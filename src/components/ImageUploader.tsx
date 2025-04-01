
import React, { useState, useRef } from 'react';
import { Upload, X, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  onImageSelect: (image: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(URL.createObjectURL(file));
    onImageSelect(file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleImageSelect(event.target.files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageSelect(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full">
      <div
        className={cn(
          "glass-morphism rounded-xl p-6 transition-all duration-300 flex flex-col items-center justify-center",
          isDragOver ? "neon-shadow-purple" : "",
          selectedImage ? "h-auto" : "h-64"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!selectedImage && (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-full bg-white/10 mb-4">
              <Upload className="h-6 w-6 text-neon-purple" />
            </div>
            <h3 className="text-xl font-medium mb-2">Drag & Drop Image</h3>
            <p className="text-sm text-gray-400 mb-4">
              or click to browse from your device
            </p>
            <button
              onClick={handleBrowseClick}
              type="button"
              className="px-4 py-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors duration-200"
            >
              Browse Files
            </button>
          </div>
        )}

        {selectedImage && (
          <div className="relative w-full animate-fade-in">
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 z-10 p-1 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="overflow-hidden rounded-lg">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto max-h-[400px] object-contain"
              />
            </div>
          </div>
        )}
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
