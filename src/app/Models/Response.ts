export interface IResponse<T>{

    success: boolean,
    errors: any,
    dataList:Array<T>,
    data: T,
    message: string
}