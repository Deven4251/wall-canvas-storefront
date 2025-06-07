
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingCart, Star, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Wallpapers" },
    { id: "floral", name: "Floral" },
    { id: "geometric", name: "Geometric" },
    { id: "textured", name: "Textured" },
    { id: "vintage", name: "Vintage" },
    { id: "modern", name: "Modern" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Botanical Paradise",
      price: 89.99,
      originalPrice: 119.99,
      category: "floral",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 124,
      isNew: true
    },
    {
      id: 2,
      name: "Geometric Dreams",
      price: 75.99,
      category: "geometric",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 89,
      isFeatured: true
    },
    {
      id: 3,
      name: "Vintage Charm",
      price: 95.99,
      category: "vintage",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop",
      rating: 4.7,
      reviews: 156,
      isNew: false
    },
    {
      id: 4,
      name: "Modern Minimalist",
      price: 65.99,
      category: "modern",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      rating: 4.6,
      reviews: 203,
      isFeatured: false
    },
    {
      id: 5,
      name: "Textured Elegance",
      price: 110.99,
      category: "textured",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 87,
      isNew: true
    },
    {
      id: 6,
      name: "Abstract Fusion",
      price: 85.99,
      category: "modern",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
      rating: 4.5,
      reviews: 145,
      isFeatured: true
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                WallArt Studio
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Collections</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search wallpapers..." 
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in">
              Transform Your Space
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Discover our premium collection of designer wallpapers. From elegant florals to modern geometrics, find the perfect style for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 hover-scale">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 hover-scale">
                View Samples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-200"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Featured Wallpapers</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked designs from our premium collection. Each wallpaper is carefully selected for its quality, style, and transformative power.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                    )}
                    {product.isFeatured && (
                      <Badge variant="secondary">Featured</Badge>
                    )}
                  </div>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="shrink-0">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Free Shipping</h4>
              <p className="text-muted-foreground">Free delivery on orders over $75. Fast and secure shipping worldwide.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Premium Quality</h4>
              <p className="text-muted-foreground">High-quality materials and printing for long-lasting beauty.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Satisfaction Guarantee</h4>
              <p className="text-muted-foreground">30-day return policy. Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4">WallArt Studio</h5>
              <p className="text-muted-foreground">Transform your space with our premium wallpaper collection.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Shop</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">All Wallpapers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Newsletter</h6>
              <p className="text-sm text-muted-foreground mb-4">Get the latest updates and offers.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 WallArt Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
