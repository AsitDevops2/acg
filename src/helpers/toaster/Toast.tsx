import './Toast.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options = {
  positionClass: 'toast-top-full-width',
  hideDuration: 300,
  timeOut: 3000
}
// const Toast= (info:any) =>{
  
//    toastr.clear();
//    if(info.type =='alert-success'){
//      setTimeout(() => toastr.success(info.msg), 300);
//    }
//    if(info.type == 'alert-danger'){
//      setTimeout(() => toastr.error(info.msg), 300);
//    }
  
//  return (true); 
// }
function Toast(info:any){
  toastr.clear();
  if(info.type ==='alert-success'){
    setTimeout(() => toastr.success(info.message), 300);
  }
  if(info.type === 'alert-danger'){
    setTimeout(() => toastr.error(info.message), 300);
  }
}

export  {Toast};