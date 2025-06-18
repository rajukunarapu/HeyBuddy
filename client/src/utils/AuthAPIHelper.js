import Axios from "axios";

// shared API for signIn and signUp
export const sharedAPI = async (url, userData) => {
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

// isAuthenticated for Protected routes
export const isAuthenticatedAPI = async () => {
  try {
    const res = await Axios.get(
      `${import.meta.env.VITE_SERVER_URL}/auth/isAuthenticated`,
      {
        headers: {
          "content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return { success: res.data.success };
  } catch (error) {
    console.log("Error : " + error.message);
    return { success: false };
  }
};

export const logoutAPI = async () => {
  try {
    const res = await Axios.get(
      `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return { message: res.data.message };
  } catch (error) {
    console.log("Error : " + error.message);
    return { message : error.response.data.message }
  }
};
