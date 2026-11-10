import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { IconSearch} from "@tabler/icons-react"

export default function AppSearchInput({placeholder}:{placeholder:string}) {
  return (<InputGroup className="w-full">
        <InputGroupInput placeholder={placeholder} />
        <InputGroupAddon>
            <IconSearch />
        </InputGroupAddon>
    </InputGroup>);
}
