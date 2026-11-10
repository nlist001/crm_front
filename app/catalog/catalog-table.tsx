'use client'
import { fetcher, sender } from "@/lib/utils";
import useSWR from "swr";
import { IProduct } from "@/models/catalog";
import { ColumnDef } from "@tanstack/react-table";
import useSWRMutation from "swr/mutation";
import { FILTER_SEARCH_KEY } from "./app-filter-search";
import { AppDataTable } from "@/components/app-data-table/app-data-table";
import { useEffect } from "react";



const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "name",
      header: "Название товара",
    },
    {
      accessorKey: "code",
      header: "Артикул",
    },
    {
      accessorKey: "category",
      header: "Категория",
    },
    {
        // accessorKey: "email",
        header: "Остаток",
     },
     {
        // accessorKey: "email",
        header: "Резерв",
     },
     {
        // accessorKey: "email",
        header: "В пути",
     },
     {
        // accessorKey: "email",
        header: "Закупочная цена",
     },
     {
        // accessorKey: "email",
        header: "Цена розница",
     },
     {
        // accessorKey: "email",
        header: "Скидка",
     },
     {
        // accessorKey: "email",
        header: "Маржа %",
     }
]

export default function CatalogTable() {
    const { data: filter_serch } = useSWR(FILTER_SEARCH_KEY, null)

    const { trigger, data, error, isMutating } = useSWRMutation<IProduct[]>(process.env.NEXT_PUBLIC_API+'products/list',sender)
    
    useEffect(()=>{
        trigger(filter_serch)
    },[filter_serch])



    return (<div>
        {data && <AppDataTable columns={columns} data={data} />}
    </div>);
}