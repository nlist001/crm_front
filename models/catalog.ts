
export interface IProduct {
    id: string;
    name: string;
    photo: string;
    sku: string;
    code: string;
    brand: string;
    category : string;
    price: number;
    created_at: string;
    updated_at: string;
}

export interface IDictionary {
    id: string;
    name: string;
}

export interface ICategory extends IDictionary {}
export interface IBrand extends IDictionary {}
export interface IStore extends IDictionary {
    address: string;
}

export interface IDictionaryToSelect {
    name: string;
    value: string;
}
export class DictionaryToSelect implements IDictionaryToSelect {
    name = '';
    value = '';
    constructor(o: IDictionary){
        if(o?.id) {
            this.name = o.name
        }
        if(o?.name) {
            this.value = o.id
        }
    }
}

export interface ICategory {
    id: string;
    name: string;
}
