import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type PriceInputProps = {
  defaultValue?: number;
};

const name = 'price';

export default function PriceInput({ defaultValue }: PriceInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
