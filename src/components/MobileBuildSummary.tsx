import { useState } from "react";
import { ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BuildItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface MobileBuildSummaryProps {
  buildItems: BuildItem[];
  onRemoveItem: (id: string) => void;
}

const MobileBuildSummary = ({ buildItems, onRemoveItem }: MobileBuildSummaryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const total = buildItems.reduce((sum, item) => sum + item.price, 0);

  if (buildItems.length === 0) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      {/* Collapsed Header */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="font-semibold text-foreground">Your Build</h3>
          <p className="text-sm text-muted-foreground">
            {buildItems.length} items • ${total.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="default" 
            size="sm"
            className="bg-tech-blue hover:bg-tech-blue/90"
          >
            Save Build
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <ChevronUp className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border">
          <div className="max-h-80 overflow-y-auto p-4 space-y-3">
            {buildItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-tech-gray rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                  <p className="text-sm font-semibold text-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-border">
            <div className="flex justify-between text-lg font-bold mb-3">
              <span className="text-foreground">Total</span>
              <span className="text-foreground">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
              Save Build
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileBuildSummary;