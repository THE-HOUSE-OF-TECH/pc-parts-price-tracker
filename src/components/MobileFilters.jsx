import { Button } from "@/components/ui/button";

const MobileFilters = () => {
  const filterOptions = [
    { id: "all", label: "All", active: true },
    { id: "cpu", label: "CPU" },
    { id: "gpu", label: "GPU" },
    { id: "ram", label: "RAM" },
  ];

  return (
    <div className="md:hidden bg-card border-b border-border px-4 py-3">
      <div className="flex space-x-2 overflow-x-auto">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant={option.active ? "default" : "outline"}
            size="sm"
            className={`whitespace-nowrap ${
              option.active 
                ? "bg-tech-blue text-white" 
                : "bg-background hover:bg-muted"
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileFilters;