

import AppHeader from "@/components/app-header/app-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsUsersTab from "./users-tab";
import dynamic from 'next/dynamic';
import { Spinner } from "@/components/ui/spinner";

const SettingsRolesTab = dynamic(() => import('./roles-tab'), {
  loading: () => <div className="p-6"><Spinner/></div>,
});
export default function SettingsUsersPage() {
 

  return (<div>
    <AppHeader title="Пользователи и роли" ></AppHeader>

      <Tabs defaultValue="users" >
        <TabsList className="ml-6">
          <TabsTrigger value="users">Пользователи</TabsTrigger>
          <TabsTrigger value="roles">Роли</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <SettingsUsersTab />
        </TabsContent>
        <TabsContent value="roles">
          <SettingsRolesTab></SettingsRolesTab>
        </TabsContent>

      </Tabs>

  </div>);
}