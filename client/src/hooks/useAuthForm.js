import { useState } from "react";
import sharedAPI from "../utils/AuthAPIHelper";
import {useNavigate} from 'react-router-dom'

function useAuthForm(mode) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isValidationAlertShow, setIsValidationAlertShow] = useState(false);
  const [isResponseAlertShow, setIsResponseAlertShow] = useState(false);
  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const [responseAlertMessage, setResponseAlertMessage] = useState("");

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnClick = async (event) => {
    let data;
    event.preventDefault();
    setIsValidationAlertShow(true);
    if (
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(formData.password)
    ) {
      setIsValidationAlertShow(false);
      if (mode === "signup") {
        data = await sharedAPI(
          `${import.meta.env.VITE_SERVER_URL}/auth/signup`,
          formData
        );
      } else if (mode === "login") {
        data = await sharedAPI(
          `${import.meta.env.VITE_SERVER_URL}/auth/login`,
          formData
        );
      }

      setIsResponseAlertShow(true);
      setIsAlertSuccess(data.success);
      setResponseAlertMessage(data.message);

      if (data.success) {
        setFormData({ email: "", password: "" });
        navigate('/')
      }
    }
  };

  return {
    formData,
    handleOnChange,
    handleOnClick,
    isValidationAlertShow,
    isResponseAlertShow,
    isAlertSuccess,
    responseAlertMessage,
  };
}

export default useAuthForm;
