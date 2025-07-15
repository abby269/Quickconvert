"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { UploadArea } from "../components/UploadArea";
import { ConversionPanel } from "../components/ConversionPanel";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

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
        
        <main className="container mx-auto px-4 py-8">
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
          <Features />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
