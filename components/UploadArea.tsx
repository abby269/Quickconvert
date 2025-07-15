
import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface UploadAreaProps {
  onFileUpload: (file: File) => void;
}

export function UploadArea({ onFileUpload }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      onFileUpload(imageFile);
    }
  }, [onFileUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  }, [onFileUpload]);

  return (
    <Card 
      className={`border-2 border-dashed transition-all duration-200 ${
        isDragging 
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
          : 'border-muted-foreground/25 hover:border-muted-foreground/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-12 text-center">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
          <Upload className="h-8 w-8 text-muted-foreground" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">Upload Your Image</h3>
        <p className="text-muted-foreground mb-6">
          Drag and drop an image here, or click to select
        </p>
        
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        
        <Button asChild className="mb-6">
          <label htmlFor="file-upload" className="cursor-pointer">
            <FileImage className="mr-2 h-4 w-4" />
            Choose Image
          </label>
        </Button>
        
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">Supported formats:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['JPG', 'PNG', 'WEBP', 'GIF', 'BMP', 'PDF'].map((format) => (
              <span key={format} className="px-2 py-1 bg-muted rounded text-xs font-medium">
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
