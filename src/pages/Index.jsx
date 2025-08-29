import { useState } from "react";
import Header from "@/components/Header.jsx";
import FilterSidebar from "@/components/FilterSidebar.jsx";
import ProductCard from "@/components/ProductCard.jsx";
import BuildSidebar from "@/components/BuildSidebar.jsx";
import MobileBuildSummary from "@/components/MobileBuildSummary.jsx";
import MobileFilters from "@/components/MobileFilters.jsx";
import Footer from "@/components/Footer.jsx";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import intelI9 from "@/assets/intel-i9-13900k.jpg";
import ryzen9 from "@/assets/ryzen-9-5950x.jpg";
import rtx4080 from "@/assets/rtx-4080.jpg";
import asusRog from "@/assets/asus-rog-maximus.jpg";
import tridentZ from "@/assets/trident-z-rgb.jpg";
import samsung980 from "@/assets/samsung-980-pro.jpg";

const Index = () => {
  const [buildItems, setBuildItems] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  const products = [
    {
      id: 1,
      name: "Intel Core i9-13900K",
      brand: "Intel",
      price: 589.99,
      rating: 4.8,
      image: intelI9,
      category: "cpu",
    },
    {
      id: 2,
      name: "AMD Ryzen 9 5950X",
      brand: "AMD",
      price: 549.99,
      rating: 4.9,
      image: ryzen9,
      category: "cpu",
    },
    {
      id: 3,
      name: "NVIDIA RTX 4080",
      brand: "NVIDIA",
      price: 1199.99,
      rating: 4.7,
      image: rtx4080,
      category: "gpu",
    },
    {
      id: 4,
      name: "ASUS ROG Maximus Z790",
      brand: "ASUS",
      price: 599.99,
      rating: 4.6,
      image: asusRog,
      category: "motherboard",
    },
    {
      id: 5,
      name: "G.SKILL Trident Z RGB 32GB",
      brand: "G.SKILL",
      price: 159.99,
      rating: 4.8,
      image: tridentZ,
      category: "ram",
    },
    {
      id: 6,
      name: "Samsung 980 PRO 1TB NVMe",
      brand: "Samsung",
      price: 149.99,
      rating: 4.9,
      image: samsung980,
      category: "storage",
    },
  ];

  const handleAddToBuild = (product) => {
    setBuildItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromBuild = (productId) => {
    setBuildItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromBuild(productId);
      return;
    }
    setBuildItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <MobileFilters />
      
      <div className="flex flex-1">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                PC Components
              </h2>
              <p className="text-muted-foreground">
                Build your perfect PC with premium components
              </p>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-tech-blue" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-tech-blue" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToBuild={handleAddToBuild}
              />
            ))}
          </div>
        </main>
        
        {/* Desktop Build Sidebar */}
        <div className="hidden xl:block w-80 border-l border-border">
          <BuildSidebar
            items={buildItems}
            onRemoveItem={handleRemoveFromBuild}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      </div>
      
      {/* Mobile Build Summary */}
      <div className="xl:hidden">
        <MobileBuildSummary
          items={buildItems}
          onRemoveItem={handleRemoveFromBuild}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;