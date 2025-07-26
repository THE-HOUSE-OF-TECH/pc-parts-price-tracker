import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-tech-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TB</span>
          </div>
          <span className="text-xl font-bold text-foreground">TechBuild</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search PC components..."
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-tech-blue text-white text-xs">
              2
            </Badge>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <User className="w-5 h-5 text-muted-foreground" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-tech-blue text-white text-xs">
              3
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;