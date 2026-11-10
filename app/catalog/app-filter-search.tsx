'use client'
import AppSearchInput from "@/components/form/app-search-input";
import {  IconSettings, IconFilter} from "@tabler/icons-react"
import { Button } from "@/components/ui/button";
import AppSelect from "@/components/form/app-select";
import useSWR from "swr";
import { IDictionaryToSelect, DictionaryToSelect } from "@/models/catalog";
import { fetcher, fetcherModel } from "@/lib/utils";
import SWRInspector from "@/lib/swr-inspector";

export const FILTER_SEARCH_KEY = 'FILTER_SEARCH_KEY'
const initialFilters = {
    search: null,
    store: "os",
    brand:null,
    category: null,
    sort: "name",
    page: 1,
    page_size: 10
 }
export default function AppFilterSearch() {
    const { data: stores } = useSWR<IDictionaryToSelect[]>([process.env.NEXT_PUBLIC_API+'stores/',DictionaryToSelect], ([url,model])=>fetcherModel(url,model))
    const { data: category } = useSWR<IDictionaryToSelect[]>([process.env.NEXT_PUBLIC_API+'category',DictionaryToSelect], ([url,model])=>fetcherModel(url,model))
    const { data: brands } = useSWR<IDictionaryToSelect[]>([process.env.NEXT_PUBLIC_API+'brands',DictionaryToSelect], ([url,model])=>fetcherModel(url,model))

    const { data: filter_serch, mutate } = useSWR(FILTER_SEARCH_KEY, null, {
        fallbackData: initialFilters,
        revalidateIfStale: false, 
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      })
    

return (<div className="filter_panel">
    <div className="justify-between">
        <AppSearchInput placeholder="Поиск по номеру заказа, клиенту, телефону ..." />
        <Button variant="secondary"><IconFilter /> Фильтры</Button>
        <Button variant="secondary" size="icon"><IconSettings /></Button>
    </div>
     <div>
        <AppSelect items={[
            {name:'По названию',value:'name'},
            {name:'По доступности',value:'available'},
            {name:'По цене',value:'price'},
            {name:'По марже',value:'margin'},
            ]}  placeholder="Сортировать" onChange={(val)=>mutate({...filter_serch,sort:val})} className="secondary"></AppSelect>
        {stores && <AppSelect items={stores}  placeholder="Склад" defaultValue="os" onChange={(val)=>mutate({...filter_serch,store:val})} className="secondary"></AppSelect>}
        {category && <AppSelect items={category}  placeholder="Категория"  onChange={(val)=>mutate({...filter_serch,category:val})} className="secondary"></AppSelect>}
        {brands && <AppSelect items={brands}  placeholder="Бренд" className="secondary" onChange={(val)=>mutate({...filter_serch,brand:val})}></AppSelect>}
        <AppSelect items={[{name:'наличия',value:'1'}]} placeholder="Статус наличия" className="secondary"></AppSelect>

    </div> 
    <SWRInspector />
</div>)
}

