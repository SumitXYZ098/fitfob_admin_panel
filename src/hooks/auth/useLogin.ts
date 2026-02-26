import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../store/auth.store";
import {
  forgotPasswordApi,
  loginApi,
  mfaActiveApi,
  mfaVerifyApi,
  resetPasswordApi,
  verifyOtpApi,
} from "../../api/auth/authApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,
  });
};

export const useMfaActive = () => {
  const { setMfaActive } = useAuthStore();

  return useMutation({
    mutationFn: mfaActiveApi,
    onSuccess: (data) => {
      if (data.message === "MFA successfully enabled") {
        setMfaActive(true);
      } else {
        setMfaActive(false);
      }
    },
  });
};

export const useMfaVerify = () => {
  return useMutation({
    mutationFn: mfaVerifyApi,
    onSuccess: (data) => {
      console.log("MFA Verify Response:", data);
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPasswordApi,
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtpApi,
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPasswordApi,
  });
};
