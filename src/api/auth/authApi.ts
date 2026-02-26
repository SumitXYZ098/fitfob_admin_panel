import axios from "axios";
import { EndPoints } from "../endpoints";

interface Login {
  identifier: string;
  password: string;
}
interface mfaActive {
  identifier: string;
  otp: string;
}
interface mfaVerify {
  tempToken: string;
  password: string;
  otp: string;
}
export const loginApi = async (data: Login) => {
  try {
    const response = await axios.post(EndPoints.login, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const mfaActiveApi = async (data: mfaActive) => {
  try {
    const response = await axios.post(EndPoints.mfaActive, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const mfaVerifyApi = async (data: mfaVerify) => {
  try {
    const response = await axios.post(EndPoints.mfaVerify, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

// Password Reset APIs
interface forgotPassword {
  identifier: string;
}
interface verifyOtp {
  identifier: string;
  otp: string;
}
interface resetPassword {
  identifier: string;
  password: string;
  confirmPassword: string;
  resetToken: string;
}
export const forgotPasswordApi = async (data: forgotPassword) => {
  try {
    const response = await axios.post(EndPoints.forgotPassword, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const verifyOtpApi = async (data: verifyOtp) => {
  try {
    const response = await axios.post(EndPoints.verifyOtp, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

export const resetPasswordApi = async (data: resetPassword) => {
  try {
    const response = await axios.post(EndPoints.resetPassword, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};
