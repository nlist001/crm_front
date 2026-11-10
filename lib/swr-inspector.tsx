import { useSWRConfig } from 'swr'
import { Button } from "@/components/ui/button";

export default function SWRInspector() {

  const { cache } = useSWRConfig()

  const checkCache = () => {
    console.log('swr cache: ',cache)
  }

  return <Button onClick={checkCache}>Проверить кэш</Button>
}