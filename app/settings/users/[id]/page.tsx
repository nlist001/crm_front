'use client'
import AppHeader from '@/components/app-header/app-header'
import { InputField } from '@/components/form/app-input'
import AppSelect from '@/components/form/app-select'
import { Button } from '@/components/ui/button'
import { FieldGroup } from '@/components/ui/field'
import { InputGroup } from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'
import { fetcher } from '@/lib/utils'
import { IUser,IRole } from '@/models/user'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
 
export default function SettingsUserPage() {
    const params = useParams<{ id: string }>()
    const { data, error, isLoading } = useSWR<IUser | undefined>(process.env.NEXT_PUBLIC_API+'users/'+params.id, fetcher)
    const { data:roles} = useSWR<IRole | undefined>(process.env.NEXT_PUBLIC_API+'users/roles/', fetcher)

    console.log(roles)

    return (<div className='p-6'>
        <AppHeader title="Редактирование пользователя" ></AppHeader>
        {isLoading ? <Spinner/> :
           <form>
            <FieldGroup>
                <InputGroup>Ник: {data?.username} </InputGroup>
                <InputGroup>Фамилия: {data?.last_name} </InputGroup>
                <InputGroup>Имя: {data?.first_name} </InputGroup>
                <InputGroup>Email: {data?.email} </InputGroup>
                <InputGroup>Телефон: {data?.phone} </InputGroup>
                <AppSelect items={[]} label="Роль" defaultValue={data?.role} />
                <Button type="submit">Submit</Button>
            </FieldGroup>
            </form>
            //    "id": "2566cf92-db1f-489b-be72-463342c0538b",
            //    "email": "dsavinov@mail.ru",
            //    "username": "dsavinov",
            //    "first_name": "Dmitrii",
            //    "last_name": "Savinov",
            //    "password": "$2b$12$0xO5Gpx9eWhUpfaL0XLz8egGDVbNcqCEIvZOebxoYd7tU5O183hNe",
            //    "phone": "89885467896",
            //    "photo": "string",
            //    "created_at": "2026-05-28T14:33:53.552000",
            //    "updated_at": "2026-05-28T14:33:53.552000+03:00",
            //    "role": "sa
        }
      </div>);
}
