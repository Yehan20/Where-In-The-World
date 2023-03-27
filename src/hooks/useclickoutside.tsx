import React, {  Ref, RefObject, useEffect } from "react"

const useClickOutside=(dropDownRef:any,cb:()=>void)=>{
   useEffect(()=>{
    console.log('useeffect');
    // console.log(dropDownRef);
    function clickOutSideHide(event:Event){
       
       if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
        // if the current elment and the place we clicked doesnt match call the cb
         cb()
       }
    }
    document.addEventListener('mousedown',clickOutSideHide);
    return ()=>{
          console.log('clean up')
          document.removeEventListener('mousedown',clickOutSideHide)
        }

   },[dropDownRef,cb])
}
export default useClickOutside