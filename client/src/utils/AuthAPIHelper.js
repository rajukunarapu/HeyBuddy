import React from "react";
import Axios from 'axios'

const sharedAPI = async(url,userData)=>{

    try{
        const res = await Axios.post(url,userData,{
            headers:{
                "Content-Type" : "application/json",
            },
            withCredentials : "true"

        })
        const data = res.data
        return data

    }catch(error){
        console.log("API Error: ", error)
    }

}

export default sharedAPI;