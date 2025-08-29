import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <Button asChild>
          <Link href="/">
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}