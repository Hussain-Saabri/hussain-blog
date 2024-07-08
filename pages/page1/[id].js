import React from "react";
import {useRouter} from "next/router";
import Image from "../../components/Image";
 function product() {
    const router = useRouter()

var A=router.query
console.log(A)
  return (
    <>
    <h1>Welcome to Product:{A.id}</h1>
   <Image 
    path={'/images/mangoes.jpg'} 
        width={300}
    />
    </>
    
  )
}

export default product