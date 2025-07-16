
import { useState } from "react";
import { Download, Loader2, FileImage, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ConversionPanelProps {
  file: File;
  onReset: () => void;
}

export function ConversionPanel({ file, onReset }: ConversionPanelProps) {
  const [outputFormat, setOutputFormat] = useState<string>("jpeg");
  const [isConverting, setIsConverting] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedFileName, setConvertedFileName] = useState<string>("");

  const handleConvert = async () => {
    setIsConverting(true);
    
    try {
      // Create a canvas to handle the conversion
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        
        if (ctx) {
          // Fill white background for JPEG format
          if (outputFormat === 'jpeg') {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          
          ctx.drawImage(img, 0, 0);
          
          // Convert to desired format
          const mimeType = outputFormat === 'jpeg' ? 'image/jpeg' : `image/${outputFormat}`;
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              setConvertedUrl(url);
              
              const originalName = file.name.split('.')[0];
              const extension = outputFormat === 'jpeg' ? 'jpg' : outputFormat;
              setConvertedFileName(`${originalName}.${extension}`);
            }
            setIsConverting(false);
          }, mimeType, 0.95);
        }
      };
      
      img.src = URL.createObjectURL(file);
    } catch (error) {
      console.error('Conversion failed:', error);
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedUrl) {
      const link = document.createElement('a');
      link.href = convertedUrl;
      link.download = convertedFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
            <FileImage className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">{file.name}</h3>
            <p className="text-sm text-muted-foreground">
              {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onReset}>
            Change
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">Conversion Settings</h3>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Output Format</label>
            <Select value={outputFormat} onValueChange={setOutputFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jpeg">JPEG (.jpg)</SelectItem>
                <SelectItem value="png">PNG (.png)</SelectItem>
                <SelectItem value="webp">WebP (.webp)</SelectItem>
                <SelectItem value="gif">GIF (.gif)</SelectItem>
                <SelectItem value="bmp">BMP (.bmp)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-xs text-muted-foreground">
            ✨ Always high quality • Files auto-deleted for privacy
          </div>
        </div>
      </Card>

      <div className="flex flex-col items-center space-y-4">
        <Button 
          onClick={handleConvert} 
          disabled={isConverting}
          className="w-full max-w-xs"
          size="lg"
        >
          {isConverting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Converting...
            </>
          ) : (
            <>
              <FileImage className="mr-2 h-4 w-4" />
              Convert Image
            </>
          )}
        </Button>

        {convertedUrl && (
          <Card className="p-4 w-full">
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                <Download className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-green-600 dark:text-green-400">
                  Conversion Complete!
                </h4>
                <p className="text-sm text-muted-foreground">{convertedFileName}</p>
              </div>
              <Button onClick={handleDownload} className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Converted Image
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
