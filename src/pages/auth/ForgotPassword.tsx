import { useForm } from "react-hook-form";
import CustomButton from "../../components/atoms/customButton/CustomButton";
import AuthLayout from "../../components/layouts/AuthLayout";
import TextInput from "../../components/modules/textInput/TextInput";
import { Link, useNavigate } from "react-router";
import { useForgotPassword } from "../../hooks/auth/useLogin";
import { useUIStore } from "../../store/ui.store";
import useSnackBarStore from "../../store/snackBar.store";

interface ForgotPasswordPayload {
  email: string;
}

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { mutate: forgotPasswordMutate } = useForgotPassword();
  const { setGlobalLoader } = useUIStore();
  const { setSnackBar } = useSnackBarStore();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordPayload>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: ForgotPasswordPayload) => {
    console.log("Form data:", data);
    setGlobalLoader(true);
    forgotPasswordMutate(
      {
        identifier: data.email,
      },
      {
        onSuccess: (res) => {
          setGlobalLoader(false);
          setSnackBar(res.message, "success");
          if (res.message === "OTP sent successfully") {
            localStorage.setItem("forgotPasswordEmail", data.email);
            navigate("/verify-otp");
          }
        },
        onError: (error) => {
          setGlobalLoader(false);
          setSnackBar(error.message, "error");
          console.log(error.message, "Error");
        },
      },
    );
  };
  const onError = () => {
    console.log("Form Error", errors);
  };
  return (
    <AuthLayout customClasses="items-start">
      <Link to="/login" className="text-primary text-base font-medium">
        Back to Login
      </Link>
      <p className="text-[64px] leading-18 font-extrabold mb-3">
        Forgot password
      </p>
      <span className="text-base text-secondary-text">
        Please enter your email to reset the password
      </span>
      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextInput
          label={"Email"}
          placeholder="Enter your email"
          fullWidth
          type="email"
          id="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          autoComplete="none"
          control={control}
          name="email"
        />

        <CustomButton
          label="Send Code"
          type="submit"
          buttonStyle="primary"
          customStyles="w-full rounded! mt-5 py-4!"
        />
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
