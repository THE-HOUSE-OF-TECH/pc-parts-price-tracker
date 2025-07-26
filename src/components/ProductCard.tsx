import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  onAddToBuild: (product: any) => void;
}

const ProductCard = ({ id, name, brand, price, rating, image, onAddToBuild }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  const handleAddToBuild = () => {
    onAddToBuild({ id, name, brand, price, image });
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200 bg-card border-border">
      <CardContent className="p-4">
        <div className="aspect-square bg-tech-gray rounded-lg mb-4 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2">
            {name}
          </h3>
          
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {brand}
          </p>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(rating)}
            </div>
            <span className="text-xs text-muted-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-bold text-lg text-foreground">
              ${price.toFixed(2)}
            </span>
            <Button 
              size="sm" 
              className="bg-tech-blue hover:bg-tech-blue/90 text-white"
              onClick={handleAddToBuild}
            >
              Add to Build
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;