import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {IconSettings, IconMessageDots, IconChevronRight, IconSparkles} from "@tabler/icons-react"


export function AppSidebarFooter() {
  return (
    <SidebarFooter>
        <SidebarMenu>
            
            <SidebarMenuItem className="mt-2 mb-2">
                <SidebarMenuButton asChild><div>
                    <span  className="multicolor-svg" ></span> <span className="multicolor-text">Нейро-чат</span>
                    <SidebarMenuAction  className="text-zinc-700"><IconChevronRight /></SidebarMenuAction>
                </div></SidebarMenuButton>
            </SidebarMenuItem>
            <li className="border-t-1 border-zink-400 -ml-2 -mr-2"></li>
            <SidebarMenuItem className="mt-2 mb-2">
                <SidebarMenuButton asChild><div>
                    <span><IconMessageDots/></span> <span>Рабочий чат</span>
                    <SidebarMenuAction  className="text-zinc-700"><IconChevronRight /></SidebarMenuAction>
                </div></SidebarMenuButton>
            </SidebarMenuItem>
            <li className="border-t-1 border-zink-400 -ml-2 -mr-2"></li>
            <SidebarMenuItem className="mt-3 mb-5">
                <SidebarMenuButton asChild><div>
                    <Avatar>
                        <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        />
                        <AvatarFallback>Донова Наталья</AvatarFallback>
                    </Avatar>
                    <div>
                        <span>Донова Наталья</span>
                        <div className="text-zinc-700 text-xs">Администратор</div>
                    </div>
                    <SidebarMenuAction  className="text-zinc-700"><IconSettings /></SidebarMenuAction>
                </div></SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu> 
    </SidebarFooter>);
}