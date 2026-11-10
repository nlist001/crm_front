export enum UserRoleEnum {
    admin = "admin",
    sales_manager = "sales_manager",
    warehouse_clerk = "warehouse_clerk",
    purchasing_clerk = "purchasing_clerk",
    accountant = "accountant",
    director = "director"
}
export enum  UserPermissionEnum {
    edit_order = "edit_order",
    edit_client = "edit_client",
    edit_good = "edit_good",
    edit_leftover = "edit_leftover",
    edit_finance = "edit_finance",
    edit_analitic = "edit_analitic",
    import_export_data = "import_export_data",
}
export interface IUser {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    phone: string;
    photo: string;
    created_at: string;
    updated_at: string;
    is_active: boolean;
    role: string;
}

export interface IPermission {
    id: number;
    name: string;
}
export interface IRole {
    id: string;
    name: UserRoleEnum;
    permissions: UserPermissionEnum[];
}

