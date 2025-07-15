
import { CheckCircle, Shield, Smartphone, Zap, FileImage, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: "No account needed",
      description: "Start converting immediately without sign-up"
    },
    {
      icon: FileImage,
      title: "Multiple formats",
      description: "Supports JPG, PNG, WebP, GIF, BMP, and more"
    },
    {
      icon: Smartphone,
      title: "Mobile-friendly",
      description: "Works perfectly on all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Fast & lightweight",
      description: "Quick processing with minimal loading time"
    },
    {
      icon: Lock,
      title: "Privacy focused",
      description: "Files auto-deleted after conversion for security"
    },
    {
      icon: Shield,
      title: "Secure processing",
      description: "Client-side conversion keeps your data safe"
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Why Choose QuickConvert?</h2>
        <p className="text-muted-foreground">Fast, secure, and completely free image conversion</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
