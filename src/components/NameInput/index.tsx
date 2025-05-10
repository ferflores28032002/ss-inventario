import { UseFormRegister, FieldValues, Path } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

interface NameInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: string;
  name: Path<T>;
}

const NameInput = <T extends FieldValues>(props: NameInputProps<T>): JSX.Element => {
    const { register, error, name } = props
  return (
    <div className="grid gap-1 py-2">
      <Label htmlFor={name}>Nombre</Label>
      <Input
        {...register(name, {required: "El nombre es requerido"})}
        type="text"
        className={cn({"focus-visible:ring-red-500": !!error})}
        placeholder="Nombre"
        autoComplete="name"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default NameInput;
