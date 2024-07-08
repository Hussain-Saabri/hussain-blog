import React,{useState} from "react";



const Modal = () => {
    const [showModal, setShowModal]=useState(false);
    const closeModal=()=>setShowModal(false)
    const MyModal=()=>{
      return(
        <>
        <h1 className="text-3xl">Stay Tuned!</h1>
         <p className="font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quod voluptatum necessitatibus, 
         beatae sequi aliquam aliquid dignissimos 
         vero inventore rem dolorum! Nihil omnis eum aut. 
         Ipsam hic similique cum quis!</p>
         <button className="rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold 
         shadow-md m-2 hover:bg-blue-700 hover:shadow-lg transition duration-300" onClick={closeModal}>
  Accept It
</button>
        </>
      );
    };
  return (
    <>
  
   
  <button className="rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold shadow-md m-2 hover:bg-blue-700 hover:shadow-lg transition duration-300" onClick={()=>setShowModal(true)}>
  Open Modal
</button>
{showModal && <MyModal /> }


    </>
  )
}

export default Modal;