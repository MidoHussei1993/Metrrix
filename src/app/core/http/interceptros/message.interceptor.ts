import {
  HttpEvent,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { catchError, mergeMap, throwError } from 'rxjs';
import Swal, { SweetAlertResult } from 'sweetalert2';

export const MessageInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    mergeMap(async (event: HttpEvent<any>) => {
      event instanceof HttpResponse &&
        event.body &&
        event.body.message &&
        Swal.fire({
          position: 'top',
          icon: 'info',
          title: event.body.message,
          showConfirmButton: false,
          timer: 1000,
        });

      return event as HttpResponse<any>;
    }),
    catchError((err: any) => {
      console.log('🚀 ~ catchError ~ err🥲🥲🥲🥲:', err);
      return throwError(() => err);
    })
  );
};
