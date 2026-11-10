import AppHeaderOrder from "../../components/orders/app-header-order";
import { order_columns } from "@/components/orders/order-columns";
import { AppDataTable } from "@/components/app-data-table/app-data-table";
const data=[{
    id: "728ed52f",
    order:'34567',
    amount: 100,
    status: "pending",
    email: "m@example.com",
}]
export default function OrderPage() {

  return (<div>
    <AppHeaderOrder />
    <AppDataTable columns={order_columns} data={data} />
  </div>);
}