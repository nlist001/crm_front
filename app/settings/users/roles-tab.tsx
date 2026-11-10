'use client'
import { IPermission, IRole, IUser, UserPermissionEnum, UserRoleEnum } from "@/models/user";
import useSWR from "swr";
import { DinamicUpdaterType, fetcher, updater } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button";
import AppCombobox from "@/components/form/app-combobox";
import { Field, FieldLabel } from "@/components/ui/field";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import useSWRMutation from "swr/mutation";


const formSchema = z.object({
    roles: z.array(z.object({
      id: z.int(),
      name: z.enum(UserRoleEnum), 
      permissions: z.array( z.string())
    }))
});

  
export default function SettingsRolesTab() {
 
    const { data: roles, error, isLoading } = useSWR<IRole[] | undefined>(process.env.NEXT_PUBLIC_API+'roles/', fetcher)
    const { data: permissions } = useSWR<IPermission[] | undefined>(process.env.NEXT_PUBLIC_API+'permissions/', fetcher)
    const { trigger, isMutating } = useSWRMutation< any,Error,string,DinamicUpdaterType<Omit<IRole,'id'>> >(process.env.NEXT_PUBLIC_API+'role/', updater)

    const [permissions_list, setPermissions_list ] = useState<string[]>([]);
    const { register, control, handleSubmit,reset, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           roles: []
        }
    });
    
    useEffect(() => {
      if (roles && permissions) {
        setPermissions_list(permissions.map(p=>p.name))
        console.log('permissions_list',permissions_list)
        console.log('permissions',permissions)
        reset({
          roles: roles.map(r => ({
            id: r.id || '',
            name: r.name || '',
            permissions: r.permissions || []
          }))
        });
      }
    }, [roles, permissions, reset]);

    const { fields, append, remove } = useFieldArray({
      control,
      name: "roles" 
    });


    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      try {
        const result = data.roles.map(async item=> await trigger({
          id: item.id,
          body:{ 
            name: item.name,
            permissions: item.permissions as UserPermissionEnum[]
          }
        })) 
      } catch (e) {
        console.log(e)
      }
    };

    const onError = (errors: any) => {
      console.log("⚠️ Форма не валидна! Ошибки:", errors);
    };

  return (<div className="p-6">
  <> {console.log('fields',fields)}</>
       <form onSubmit={handleSubmit(onSubmit,onError)}>
          {isLoading ? <div className="p-6"><Spinner/></div> :<>

          {fields.map((item,index)=>(<Controller key={item.id}
              name={`roles.${index}.permissions` as const}
              control={control}
              render={({ field, fieldState }) => (<Field  className="pb-4">
                    <FieldLabel htmlFor="input-demo-api-key">{item.name}</FieldLabel>
                    {
                    permissions_list.length>0 && <AppCombobox  key={'acbox_'+item.id}
                      {...field} 
                      items={permissions_list} 
                    //  defaultInputValue={permissions_list.filter(p => item.permissions.includes(p))}
                    ></AppCombobox>
                    }
                    {errors.roles?.[index]?.permissions_list}
                  
                </Field> )}
            />))} 

            <div className="pt-6 pb-6"><Button type="submit">Обновить</Button></div> 
              
            </>}
        </form>
  </div>);
}