import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BuildItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface BuildSidebarProps {
  buildItems: BuildItem[];
  onRemoveItem: (id: string) => void;
}

const BuildSidebar = ({ buildItems, onRemoveItem }: BuildSidebarProps) => {
  const subtotal = buildItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="w-80 bg-card border-l border-border p-6 h-full overflow-y-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Your Build</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {buildItems.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No components added yet. Start building your PC by adding components.
            </p>
          ) : (
            <>
              {buildItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 group">
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
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-success font-medium">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white">
                Save Build
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BuildSidebar;