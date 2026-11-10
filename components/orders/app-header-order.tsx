import { AppBreadcrumb } from "@/components/app-breadcrumb/app-breadcrumb";
import AppSearchInput from "@/components/form/app-search-input";
import AppSelect from "@/components/form/app-select";
import AppHeader from "@/components/app-header/app-header";
import { Button } from "@/components/ui/button";
import { IconPrinter, IconUpload, IconPlus, IconSettings, IconFilter} from "@tabler/icons-react"

export default function AppHeaderOrder() {
    const  headerEls = <div>
        <Button variant="ghost" size="sm">
            <IconPrinter /> Печать
        </Button>
        <Button variant="ghost" size="sm">
            <IconUpload /> Экспорт
        </Button>
    </div>
    const subHeaderEls = <Button><IconPlus /> Создать заказ</Button>
  return (<AppHeader title="Заказы" headerEls={headerEls} subHeaderEls={subHeaderEls}>
        <div className="filter_panel">
            <div className="justify-between">
                <AppSearchInput placeholder="Поиск по номеру заказа, клиенту, телефону ..." />
                <Button variant="secondary"><IconFilter /> Фильтры</Button>
                <Button variant="secondary" size="icon"><IconSettings /></Button>
            </div>
            <div>
                <Button variant="secondary">Мои заказы</Button>
                <AppSelect items={[{name:'1',value:'1'}]}  placeholder="Способ связи" className="secondary"></AppSelect>
                <AppSelect items={[{name:'1',value:'1'}]}  placeholder="Тип клиента" className="secondary"></AppSelect>
                <Button variant="secondary">Без ответственного</Button>
                <Button variant="secondary">VIP</Button>
                <Button variant="secondary">Требуют реакции</Button>

            </div>
        </div>
  </AppHeader>);
}
//     <header>
//         <AppBreadcrumb items={[{name:'Заказы'}]} />
//         <div>
//             <Button variant="ghost" size="sm">
//                 <IconPrinter /> Печать
//             </Button>
//             <Button variant="ghost" size="sm">
//                 <IconUpload /> Экспорт
//             </Button>
//         </div>
//     </header>
//     <div className="p-6">
//         <div className="sub_header">
//             <h1>Заказы</h1>
//             <Button>
//                 <IconPlus /> Создать заказ
//             </Button>
//         </div>
//         <div className="filter_panel">
//             <div className="justify-between">
//                 <AppSearchInput placeholder="Поиск по номеру заказа, клиенту, телефону ..." />
//                 <Button variant="secondary"><IconFilter /> Фильтры</Button>
//                 <Button variant="secondary" size="icon"><IconSettings /></Button>
//             </div>
//             <div>
//                 <Button variant="secondary">Мои заказы</Button>
//                 <AppSelect items={[{name:'1',value:'1'}]}  placeholder="Способ связи" className="secondary"></AppSelect>
//                 <AppSelect items={[{name:'1',value:'1'}]}  placeholder="Тип клиента" className="secondary"></AppSelect>
//                 <Button variant="secondary">Без ответственного</Button>
//                 <Button variant="secondary">VIP</Button>
//                 <Button variant="secondary">Требуют реакции</Button>

//             </div>
//         </div>
        
//     </div>
//   </div>
// }