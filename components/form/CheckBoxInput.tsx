'use client';
import { Checkbox } from '@/components/ui/checkbox';

type CheckBoxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

export default function CheckBoxInput({
  name,
  label,
  defaultChecked,
}: CheckBoxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
