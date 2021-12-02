declare let setTimeout:any

export const deounbce = function(fn:Function, wait:Number) {
  let timeout:any = null
  return function() {
    if(timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait);
  }
}
