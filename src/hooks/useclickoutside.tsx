import React, {  useEffect } from "react"

const useClickOutside=(dropDownRef:React.RefObject<HTMLElement>,cb:()=>void)=>{
   useEffect(()=>{
    console.log('useeffect');
 
    function clickOutSideHide(event:Event){
    
       if(dropDownRef.current && !dropDownRef.current.contains(event.target as Node)){
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