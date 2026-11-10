'use client'
import { AppDataTable } from "@/components/app-data-table/app-data-table";
import { IRole, IUser } from "@/models/user";
import { ColumnDef } from "@tanstack/react-table";
import AppHeader from "@/components/app-header/app-header";
import useSWR from "swr";
import { fetcher, updater } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner"
import AppSelect from "@/components/form/app-select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useSWRMutation from 'swr/mutation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function SettingsUsersTab() {
 
    const { data, error, isLoading } = useSWR<IUser[] | undefined>(process.env.NEXT_PUBLIC_API+'users/', fetcher)
    const { data:roles} = useSWR<IRole[] | undefined>(process.env.NEXT_PUBLIC_API+'roles', fetcher)
    const roles_select = roles?.map(r=>({name: r.name, value: r.name})) || []
    const [updateUsers, setUpdateUsers] = useState<IUser[]>([]);
    const { trigger, isMutating } = useSWRMutation<IUser[],Error,string,IUser[]>(process.env.NEXT_PUBLIC_API+'users/', updater, /* options */)


    const columns: ColumnDef<IUser>[] = [
        {
          accessorKey: "last_name",
          header: "Last name",
        },
        {
          accessorKey: "first_name",
          header: "First name",
        },
        {
          accessorKey: "username",
          header: "Username",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "role",
            header: "Роль",
            cell: ({ row }) => (<AppSelect label="Роль" defaultValue={row.original.role} onChange={(newRole: string)=>onChangeSelect(row.original,newRole)} items={roles_select}/>)
            
        },
    ]

    function onChangeSelect(user: IUser, newRole: string){
      setUpdateUsers((prevState)=>{
        const i = prevState.findIndex(item=> item.id==user.id)
        if(i>-1) {
          prevState[i] = {...user, role: newRole}
        } else{
          prevState.push({...user, role: newRole});
        }
        return prevState;
      })
    }

    async function onUpdate(){
      try {
        const result = await trigger(updateUsers)
      } catch (e) {
        // error handling
      }

    }

  return (<div>
   
          {isLoading ? <div className="p-6"><Spinner/></div> :
              data && <>
                  <AppDataTable columns={columns} data={data} />
                  <div className="p-6"><Button onClick={onUpdate} >Обновить</Button></div> 
              </>
            }

  </div>);
}