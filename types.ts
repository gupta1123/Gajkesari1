// types/types.ts

export interface Customer {
    storeId: string;
    storeName: string;
    clientFirstName: string;
    primaryContact: string;
    monthlySale: number;
    intentLevel: number;
    intent: number;
    employeeName: string;
    clientType: string;
    totalVisitCount: number;
    lastVisitDate: string;
    totalVisits: number;
    email: string;
    city: string;
    state: string;
}