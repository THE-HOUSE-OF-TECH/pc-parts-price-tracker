import { useState } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import BuildSidebar from "@/components/BuildSidebar";
import Footer from "@/components/Footer";

// Import images
import ryzenImage from "@/assets/ryzen-9-5950x.jpg";
import rtxImage from "@/assets/rtx-4080.jpg";
import tridentImage from "@/assets/trident-z-rgb.jpg";
import intelImage from "@/assets/intel-i9-13900k.jpg";
import asusImage from "@/assets/asus-rog-maximus.jpg";
import samsungImage from "@/assets/samsung-980-pro.jpg";

const Index = () => {
  const [buildItems, setBuildItems] = useState([]);

  const products = [
    {
      id: "ryzen-9-5950x",
      name: "AMD Ryzen 9 5950X",
      brand: "AMD",
      price: 749.99,
      rating: 4.8,
      image: ryzenImage,
    },
    {
      id: "rtx-4080",
      name: "NVIDIA RTX 4080",
      brand: "NVIDIA",
      price: 1199.99,
      rating: 4.9,
      image: rtxImage,
    },
    {
      id: "trident-z-rgb",
      name: "G.SKILL Trident Z RGB",
      brand: "G.SKILL",
      price: 199.99,
      rating: 4.7,
      image: tridentImage,
    },
    {
      id: "intel-i9-13900k",
      name: "Intel Core i9-13900K",
      brand: "Intel",
      price: 589.99,
      rating: 4.6,
      image: intelImage,
    },
    {
      id: "asus-rog-maximus",
      name: "ASUS ROG Maximus",
      brand: "ASUS",
      price: 499.99,
      rating: 4.8,
      image: asusImage,
    },
    {
      id: "samsung-980-pro",
      name: "Samsung 980 PRO",
      brand: "Samsung",
      price: 129.99,
      rating: 4.9,
      image: samsungImage,
    },
  ];

  const handleAddToBuild = (product) => {
    setBuildItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFromBuild = (productId) => {
    setBuildItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <FilterSidebar />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToBuild={handleAddToBuild}
              />
            ))}
          </div>
        </main>
        
        <BuildSidebar
          buildItems={buildItems}
          onRemoveItem={handleRemoveFromBuild}
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
