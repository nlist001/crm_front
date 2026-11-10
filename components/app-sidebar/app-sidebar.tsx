

import { ReactNode } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarBody } from "./app-sidebar-body"
export function AppSidebar({children}:{children: ReactNode}) {
  
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebarBody />
       {children}
    </SidebarProvider>
  )
}