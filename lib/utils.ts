import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { int } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = (...args) => fetch(...args).then(res => res.json())
export const fetcherModel = (url: string, model: any) => fetch(url).then(res => res.json()).then(res=> res.map((item:any)=>new model(item)))

export async function sender<T>(url: string, { arg }: { arg: T}) {
  console.log(arg)
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  }).then(res => res.json())
}

export type DinamicUpdaterType<T> = { id: string | number, body: T }
// type UpdaterType= T | { id: string | number, body: T }

export async function updater<T>(url: string, { arg }: { arg: T | DinamicUpdaterType<T>}) {
  const { id, body } = arg as { id?: string | number; body?: T };
  const _url = id ? url + id : url;
  const _body = body ? JSON.stringify(body): JSON.stringify(arg)

  return fetch(_url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: _body
  }).then(res => res.json())
}