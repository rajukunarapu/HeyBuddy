import React, {useState} from "react";
import sharedAPI from "../utils/AuthAPIHelper";

function useAuthForm(mode){

  const [formData, setFormData] = useState({ email : "", password : "" })
  const [isAlertShow, setisAlertShow] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const handleOnChange = (event)=>{
    setFormData((prev)=>({ ...prev, [event.target.name] : event.target.value } ))
  }

  const handleOnClick = async(event)=>{
    event.preventDefault();
    setisAlertShow(true)
    if( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(formData.password) ){
      setisAlertShow(false)
      if(mode === "signup"){
        const data = await sharedAPI(`${import.meta.env.VITE_SERVER_URL}/auth/signup`,formData);
        setAlertMessage(data.message)
      }   
      else if(mode === "login"){
        const data = await sharedAPI(`${import.meta.env.VITE_SERVER_URL}/auth/login`,formData);
        setAlertMessage(data.message)
      }
      setFormData({ email : "", password : "" })
    }
  }

  return { formData, handleOnChange, handleOnClick, alertMessage, isAlertShow }

}

export default useAuthForm;