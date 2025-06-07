
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, Plus, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WallpaperForm {
  name: string;
  price: string;
  originalPrice: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  isFeatured: boolean;
}

export const WallpaperUpload = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<WallpaperForm>({
    name: "",
    price: "",
    originalPrice: "",
    category: "floral",
    description: "",
    image: "",
    isNew: false,
    isFeatured: false
  });

  const categories = [
    { id: "floral", name: "Floral" },
    { id: "geometric", name: "Geometric" },
    { id: "textured", name: "Textured" },
    { id: "vintage", name: "Vintage" },
    { id: "modern", name: "Modern" },
    { id: "abstract", name: "Abstract" },
    { id: "nature", name: "Nature" }
  ];

  const handleInputChange = (field: keyof WallpaperForm, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real implementation, you'd upload to your file storage service
      // For now, we'll create a mock URL
      const mockUrl = `https://images.unsplash.com/photo-${Date.now()}?w=400&h=600&fit=crop`;
      setFormData(prev => ({ ...prev, image: mockUrl }));
      toast({
        title: "Image uploaded",
        description: "Wallpaper image has been uploaded successfully.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.price || !formData.category || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, you'd save to your MongoDB Atlas database
    console.log("Saving wallpaper:", formData);
    
    toast({
      title: "Success",
      description: "Wallpaper has been added to the collection.",
    });

    // Reset form
    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      category: "floral",
      description: "",
      image: "",
      isNew: false,
      isFeatured: false
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add New Wallpaper
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Wallpaper Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g. Botanical Paradise"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="89.99"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="originalPrice">Original Price</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={(e) => handleInputChange("originalPrice", e.target.value)}
                    placeholder="119.99"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe the wallpaper style and features..."
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Options</Label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isNew}
                      onChange={(e) => handleInputChange("isNew", e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Mark as New</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => handleInputChange("isFeatured", e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Featured</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="imageUpload">Upload Image *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center space-y-4">
                  {formData.image ? (
                    <div className="space-y-4">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg mx-auto"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleInputChange("image", "")}
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload wallpaper image (JPG, PNG, WEBP)
                        </p>
                        <Input
                          id="imageUpload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Preview</Label>
                <div className="border rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold">{formData.name || "Wallpaper Name"}</h4>
                  <p className="text-sm text-muted-foreground">{formData.description || "Description will appear here"}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">${formData.price || "0.00"}</span>
                    {formData.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${formData.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {formData.isNew && <Badge className="bg-green-500">New</Badge>}
                    {formData.isFeatured && <Badge variant="secondary">Featured</Badge>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Add Wallpaper
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
