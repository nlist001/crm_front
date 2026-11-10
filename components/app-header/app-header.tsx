import { AppBreadcrumb } from "@/components/app-breadcrumb/app-breadcrumb";
import AppSearchInput from "@/components/form/app-search-input";
import AppSelect from "@/components/form/app-select";
import { Button } from "@/components/ui/button";
import { IconPrinter, IconUpload, IconPlus, IconSettings, IconFilter} from "@tabler/icons-react"

interface IAppHeaderProps {
    headerEls?: React.ReactNode;
    subHeaderEls?: React.ReactNode;
    children?: React.ReactNode;
    title: string
  }
export default function AppHeader({headerEls,subHeaderEls, title, children}:IAppHeaderProps) {
  return (<div>
    <header>
        <div className="flex-grow-1">
            <AppBreadcrumb items={[{name: title}]} />
        </div>
        <div>
          {headerEls}
        </div>
    </header>
    <div className="p-6">
        <div className="sub_header">
            <h1>{title}</h1>
            {subHeaderEls}
        </div>
        {children}
        
    </div>
  </div>);
}