
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Search, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data - in real implementation, this would come from your MongoDB Atlas database
const mockWallpapers = [
  {
    id: 1,
    name: "Botanical Paradise",
    price: 89.99,
    originalPrice: 119.99,
    category: "floral",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isFeatured: false,
    description: "Elegant botanical wallpaper with tropical leaves"
  },
  {
    id: 2,
    name: "Geometric Dreams",
    price: 75.99,
    category: "geometric",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isFeatured: true,
    description: "Modern geometric patterns in cool tones"
  },
  {
    id: 3,
    name: "Vintage Charm",
    price: 95.99,
    category: "vintage",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isFeatured: false,
    description: "Classic vintage damask pattern"
  }
];

export const WallpaperList = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [wallpapers, setWallpapers] = useState(mockWallpapers);

  const filteredWallpapers = wallpapers.filter(wallpaper =>
    wallpaper.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wallpaper.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id: number) => {
    toast({
      title: "Edit functionality",
      description: "Edit modal would open here in a real implementation.",
    });
  };

  const handleDelete = (id: number) => {
    setWallpapers(prev => prev.filter(w => w.id !== id));
    toast({
      title: "Wallpaper deleted",
      description: "The wallpaper has been removed from the collection.",
    });
  };

  const toggleFeatured = (id: number) => {
    setWallpapers(prev => 
      prev.map(w => 
        w.id === id ? { ...w, isFeatured: !w.isFeatured } : w
      )
    );
    toast({
      title: "Updated",
      description: "Featured status has been updated.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Manage Wallpapers</h3>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search wallpapers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWallpapers.map((wallpaper) => (
          <Card key={wallpaper.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={wallpaper.image}
                alt={wallpaper.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {wallpaper.isNew && (
                  <Badge className="bg-green-500 text-xs">New</Badge>
                )}
                {wallpaper.isFeatured && (
                  <Badge variant="secondary" className="text-xs">Featured</Badge>
                )}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">{wallpaper.name}</h4>
                <p className="text-sm text-muted-foreground capitalize">
                  Category: {wallpaper.category}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {wallpaper.description}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{wallpaper.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({wallpaper.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">${wallpaper.price}</span>
                  {wallpaper.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${wallpaper.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(wallpaper.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleFeatured(wallpaper.id)}
                      className={wallpaper.isFeatured ? "bg-blue-50" : ""}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(wallpaper.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredWallpapers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No wallpapers found matching your search.</p>
        </div>
      )}
    </div>
  );
};
