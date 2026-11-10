import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@/components/ui/field"
  import { Input } from "@/components/ui/input"
  
interface IInputFieldProps {
    label: string;
    value?: string;
    type?: string;
    placeholder?: string;
    description?: string;
}

  export function InputField({label,value='',type ='text', placeholder ='', description}:IInputFieldProps) {
    return (
      <Field>
        <FieldLabel htmlFor={"input-field-"+label}>{label}</FieldLabel>
        <Input
          id={"input-field-"+label}
          type={type}
          placeholder={placeholder}
          value={value}
        />
        {description && <FieldDescription> {description} </FieldDescription>}
      </Field>
    )
  }
  