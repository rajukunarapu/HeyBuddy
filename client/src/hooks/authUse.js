import { useState } from "react";

function useAuthForm(){

  const [formData, setFormData] = useState({ email : "", password : "" })
  console.log(formData)

  const handleOnChange = (event)=>{
    setFormData((prev)=>({ ...prev, [event.target.name] : event.target.value } ))
  }

  const handleOnClick = (event)=>{
    event.preventDefault();
    if( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(formData.password) ){
      setFormData({ email : "", password : "" })
    }
  }

  return { formData, handleOnChange, handleOnClick }

}

export default useAuthForm;