import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
SidebarMenuSub,
SidebarMenuSubItem,
SidebarMenuSubButton,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
} from "@/components/ui/sidebar"
import {Collapsible,CollapsibleTrigger,CollapsibleContent} from "@/components/ui/collapsible"
import {
  IconLayoutDashboard,
  IconShoppingCart,
  IconBox,
  IconCreditCard,
  IconUserSquare,
  IconTruck,
  IconChartDots,
  IconAdjustmentsHorizontal,
  IconCalendarCheck,
  IconChevronDown,
} from "@tabler/icons-react"
import Image from 'next/image'
import Link from 'next/link'
import { AppSidebarFooter } from "./app-sidebar-footer"

const menuList = [
    {name:'Главный экран', url:'/', icon: <IconLayoutDashboard/> },
    {name:'Заказы', url:'/orders', icon: <IconShoppingCart/>, childs: [
        {name:'Список заказов', url:'/orders'},
        {name:'Создать заказ', url:''},
        {name:'Возвраты', url:''}
    ]},
    {name:'Склад и товары', url:'/catalog', icon:<IconBox/>, childs: [
        {name:'Каталог', url:'/catalog'},
        {name:'Остатки и резервы', url:'/stock'},
        {name:'Приемка', url:'/receipt'},
        {name:'Списания', url:'/write-off'},
        {name:'Перемещения', url:'/movements'},
        {name:'Инвентаризация', url:'/inventory'},
    ]},
    {name:'Финансы', icon:<IconCreditCard/>, url:'23123', childs: [
        {name:'Счета и оплаты', url:''},
        {name:'Расходы', url:''},
        {name:'Фининсовые отчеты', url:''},
    ]},
    {name:'Клиенты и контрагенты', icon:<IconUserSquare/>, url:'23123', childs: [
        {name:'Клиенты', url:''},
        {name:'Поставщики', url:''},
        {name:'Заявки/Лиды', url:''},
        {name:'Коммуникации', url:''},
    ]},
    {name:'Закупки и контейнеры', icon:<IconTruck/>, url:'23123', childs: [
        {name:'Позиции в закупке', url:''},
        {name:'Заказы поставщикам', url:''},
        {name:'Контейнеры', url:''},
    ] },
    {name:'Аналитика и отчеты', icon:<IconChartDots/>, url:'23123', childs: [
        {name:'Дашборды KPI', url:''},
        {name:'Продажи', url:''},
        {name:'Склад', url:''},
        {name:'Финансы', url:''},
        {name:'Эффективность сотрудников', url:''},
    ]},
    {name:'Настройки и управление', icon:<IconAdjustmentsHorizontal/>, url:'23123', childs: [
        {name:'Пользователи и роли', url:'/settings/users'},
        {name:'Реквизиты компании', url:'/settings/company_details'},
        {name:'Шаблоны печатных форм и уведомлений', url:''},
        {name:'Импорт/экспорт', url:''},
        {name:'Профиль пользователя (личные настройки)', url:''},
    ]},
    {name:'Планировщик задач', icon:<IconCalendarCheck/>, url:'23123' },
]
export function AppSidebarBody() {

  return (
    <Sidebar collapsible = "icon">
      <SidebarHeader className="mt-3 mb-6 align-items-center">
        <Image
            src="/next.svg"
            width={164}
            height={16}
            alt="Picture of the author"
            />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="text-zinc-900">
        {menuList.map((item) => (
            <Collapsible  key={item.name}>
                <SidebarMenuItem>
                    {item?.childs && <CollapsibleTrigger asChild >
                       <SidebarMenuButton asChild><div>
                            <span>{item.icon}</span> <span>{item.name}</span>
                            <SidebarMenuAction ><IconChevronDown/></SidebarMenuAction>
                        </div></SidebarMenuButton>
                    </CollapsibleTrigger>}

                    {!item?.childs && <SidebarMenuButton asChild>
                            <Link href={item.url} className="text-nowrap">
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                    </SidebarMenuButton>}

                    <CollapsibleContent>
                    <SidebarMenuSub>
                        {item?.childs?.map((child) => (
                            <SidebarMenuSubItem key={child.name}>
                                <SidebarMenuSubButton  href={child.url} className="text-nowrap">
                            
                                    <span>{child.name}</span>
                             
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        ))}
        </SidebarMenu>
      
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  )
}



