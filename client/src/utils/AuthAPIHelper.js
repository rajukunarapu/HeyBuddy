import Axios from "axios";

const sharedAPI = async (url, userData) => {
  try {
    const res = await Axios.post(url, userData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return { success: true, message: res.data.message };
  } catch (error) {
    console.log("API Error: ", error);
    if (error.response && error.response.data) {
      return {
        success: false,
        message: error.response.data.message || "something went wrong",
      };
    }
    return {
      success: false,
      message: error.message || "Network error occured",
    };
  }
};

export default sharedAPI;
