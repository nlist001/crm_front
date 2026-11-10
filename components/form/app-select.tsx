import { Select,SelectTrigger,SelectValue,SelectContent,SelectGroup,SelectLabel,SelectItem } from "../ui/select";

export interface IAppSelectItem {
    value: string;
    name:string;
}
export interface IAppSelect {
    items: IAppSelectItem[];
    defaultValue?: string;
    placeholder?: string;
    label?: string;
    className?: "secondary" | string;
    onChange?: any
}

export default function AppSelect({items,label,defaultValue,onChange,placeholder="Выберите...", className}:IAppSelect) {
  
  return (<Select  defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className={className == "secondary"?"bg-secondary border-0 text-secondary-foreground!": className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {items.map(item=>(<SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>))}
        </SelectGroup>
      </SelectContent>
    </Select>);
}