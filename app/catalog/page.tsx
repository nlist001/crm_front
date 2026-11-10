

import AppHeader from "@/components/app-header/app-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from 'next/dynamic';
import { Spinner } from "@/components/ui/spinner";
import CatalogTable from "./catalog-table";
import AppHeaderCatalog from "./app-header-catalog";
import AppFilterSearch from "./app-filter-search";

export default function CatalogPage() {
 

  return (<div>
    <AppHeaderCatalog />
  
    <div className="p-6"><Spinner/></div>
    <CatalogTable />
      

  </div>);
}