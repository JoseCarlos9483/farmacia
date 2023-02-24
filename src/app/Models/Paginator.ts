export interface Paginator<T>
{
    currentPage: number;
    recordPage: number;
    totalRecords:number;
    records:T[];
    totalPages:number;
    hasCurrentPage:boolean;
    hasNextPage:boolean;
    
}