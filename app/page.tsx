"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { UploadArea } from "../components/UploadArea";
import { ConversionPanel } from "../components/ConversionPanel";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleReset = () => {
    setUploadedFile(null);
  };

return (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Section with Ad Spaces */}
      <div className="container mx-auto px-4 py-8 flex gap-4">
        {/* Left Ad Placeholder */}
        <Card className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 border-dashed border-2 border-green-300 h-[600px]">
          <CardContent className="p-4">
            <div className="text-center text-green-700">
              <p className="text-sm font-medium">🎯 Ad Space</p>
              <p className="text-xs text-green-600 mt-1">Reach developers and content creators</p>
            </div>
          </CardContent>
        </Card>


        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Free Online Image Converter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload, convert, and download in seconds. No sign-up required.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl mx-auto mb-16">
            {!uploadedFile ? (
              <UploadArea onFileUpload={handleFileUpload} />
            ) : (
              <ConversionPanel file={uploadedFile} onReset={handleReset} />
            )}
          </div>

          {/* Features Section */}

        </main>

        {/* Right Ad Placeholder */}
        <Card className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 border-dashed border-2 border-green-300 h-[600px]">
          <CardContent className="p-4">
            <div className="text-center text-green-700">
              <p className="text-sm font-medium">🎯 Ad Space</p>
              <p className="text-xs text-green-600 mt-1">Reach developers and content creators</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Features />

      <Footer />
    </div>
  </ThemeProvider>
);
}
