
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Upload, Plus, Edit, Trash2, Save, X } from "lucide-react";
import { WallpaperUpload } from "@/components/WallpaperUpload";
import { WallpaperList } from "@/components/WallpaperList";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <Badge variant="secondary">WallArt Studio</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="/">Back to Store</a>
              </Button>
              <Button variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Wallpaper Management</h2>
          <p className="text-muted-foreground">Upload, edit, and manage your wallpaper collection</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Wallpaper
            </TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Manage Wallpapers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <WallpaperUpload />
          </TabsContent>

          <TabsContent value="manage">
            <WallpaperList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
