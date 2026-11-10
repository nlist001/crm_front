
import AppSelect from "@/components/form/app-select";
import AppHeader from "@/components/app-header/app-header";
import { Button } from "@/components/ui/button";
import { IconPrinter, IconUpload, IconPlus, IconSettings, IconFilter} from "@tabler/icons-react"
import AppFilterSearch from "./app-filter-search";

export default function AppHeaderCatalog() {
    const  headerEls = <div>
        <Button variant="ghost" size="sm">
            <IconPrinter /> Печать
        </Button>
        <Button variant="ghost" size="sm">
            <IconUpload /> Экспорт
        </Button>
    </div>
    const subHeaderEls = <Button><IconPlus /> Добавить товар</Button>
  return (<AppHeader title="Каталог товаров" headerEls={headerEls} subHeaderEls={subHeaderEls}>
         
            <AppFilterSearch />
        
  </AppHeader>);
}
