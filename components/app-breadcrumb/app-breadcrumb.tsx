import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Fragment } from "react/jsx-runtime";
export interface IBreadcrumb {
    name: string;
    url?: string;
}

let itemsDefault: IBreadcrumb[] = [{name:'Главная', url:'/'}]


export function AppBreadcrumb({items}: {items:IBreadcrumb[]}) {
    itemsDefault = itemsDefault.concat(items);

  return (
    <Breadcrumb className="mt-2">
      <BreadcrumbList>
        {itemsDefault.map((crumb,i) =>(
          <Fragment key={crumb.url+'_'+i}>
            <BreadcrumbItem >
                {crumb.url && <BreadcrumbLink href={crumb.url}>{crumb.name}</BreadcrumbLink>}
                {!crumb.url && <BreadcrumbPage>{crumb.name}</BreadcrumbPage>}
                
            </BreadcrumbItem>
            {crumb.url && <BreadcrumbSeparator />}
          </Fragment>
       ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
