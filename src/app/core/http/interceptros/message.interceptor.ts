import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
 import { catchError, mergeMap, throwError, } from 'rxjs';
import Swal, { SweetAlertResult } from 'sweetalert2';
 
export const MessageInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    mergeMap(async (event: HttpEvent<any>) => {
       console.log("🚀 ~ mergeMa✌️✌️✌️✌️p ~ event:", event)

       event instanceof HttpResponse && event.body && event.body.message && Swal.fire({
                position: 'top',
                icon: 'info',
                title: event.body.message,
                showConfirmButton: false,
                timer: 1000,
              });
       
        return event as HttpResponse<any>;
       
    }),
    catchError((err:any) => {
      console.log("🚀 ~ catchError ~ err🥲🥲🥲🥲:", err)
    //   if (err.error && err.error.errors && err.error.errors.length) {
    //     err.error.errors.map((item:any)=>{
    //       Swal.fire({
    //         position: 'center',
    //         icon: 'error',
    //         title: item.detail,
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     })
        
    //   }
      
        return throwError(() => err)
   
    })
  );
};
