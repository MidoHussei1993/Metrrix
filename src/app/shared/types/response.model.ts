export class GenericResponse<T> {
    message: string = '';
    code?: number ;
    data?: T ;
}