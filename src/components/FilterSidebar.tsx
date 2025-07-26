import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const FilterSidebar = () => {
  const componentTypes = [
    { id: "cpu", label: "CPU" },
    { id: "gpu", label: "GPU" },
    { id: "ram", label: "RAM" },
    { id: "motherboard", label: "Motherboard" },
    { id: "storage", label: "Storage" },
    { id: "power-supply", label: "Power Supply" },
  ];

  const brands = [
    { id: "amd", label: "AMD" },
    { id: "intel", label: "Intel" },
    { id: "nvidia", label: "NVIDIA" },
    { id: "asus", label: "ASUS" },
    { id: "msi", label: "MSI" },
    { id: "g-skill", label: "G.SKILL" },
  ];

  const priceRanges = [
    { id: "under-100", label: "Under $100" },
    { id: "100-200", label: "$100 - $200" },
    { id: "200-500", label: "$200 - $500" },
    { id: "over-500", label: "Over $500" },
  ];

  return (
    <div className="w-64 bg-card border-r border-border p-6 h-full overflow-y-auto">
      {/* Component Type */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Component Type</h3>
        <div className="space-y-3">
          {componentTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={type.id} />
              <Label
                htmlFor={type.id}
                className="text-sm text-foreground cursor-pointer"
              >
                {type.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Brand */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-4">Brand</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id={brand.id} />
              <Label
                htmlFor={brand.id}
                className="text-sm text-foreground cursor-pointer"
              >
                {brand.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox id={range.id} />
              <Label
                htmlFor={range.id}
                className="text-sm text-foreground cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;