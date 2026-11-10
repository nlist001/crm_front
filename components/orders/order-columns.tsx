"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id: string
  order: string
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const order_columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order",
    header: "Заказ",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]