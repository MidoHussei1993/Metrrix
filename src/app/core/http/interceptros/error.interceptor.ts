import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    
    catchError((err) => {
      console.log("🚀 ~ catchError ~ err:", err)
      if (err.error && err.error.errors && err.error.errors.length) {
        err.error.errors.map((item:any)=>{
          // Swal.fire({
          //   position: 'center',
          //   icon: 'error',
          //   title: item.detail,
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        })
        
      }
      if (err.status === 401) {
        localStorage.clear();
        window.location.replace(
          `/auth/login?redirectFrom=${window.location.href}`
        );
      }


      if (err.status && !(err.status === 422)) {
        console.log(err)
        // Swal.fire({
        //   icon: 'warning',
        //   position: 'center',
        //   text: this.translate.instant('error'),
        //   title:err.error,
        //   showConfirmButton: false,
        //   timer: 5000,
        // });
      }

      if (err.status === 0) {
        // Swal.fire({
        //   showClass: {
        //     popup: 'animate__animated animate__fadeInDown',
        //   },
        //   hideClass: {
        //     popup: 'animate__animated animate__fadeOutUp',
        //   },
        //   position: 'top-start',
        //   text: 'check your internet connection',
        //   showCancelButton: false,
        //   showCloseButton: false,
        // });
      }
      if (err.status === 500) {
        // Swal.fire({
        //   position: 'center',
        //   icon: 'error',
        //   title: 'Something went wrong',
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        
      }

      const error = err.error
        ? err.error.message || err.statusText
        : err.status;
      return throwError(error);
    })
  );
};
