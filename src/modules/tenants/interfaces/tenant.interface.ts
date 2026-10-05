export interface Tenant {
    id: string;
    name: string;
    code: string;
    status: 'active' | 'inactive';
    createdAt: Date;
    updatedAt: Date;
}