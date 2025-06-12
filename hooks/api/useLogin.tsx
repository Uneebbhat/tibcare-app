import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import useFormHandler from "../useFormHandler";

const useLogin = () => {
  const router = useRouter();
  const { formData, resetForm, handleOnChange } = useFormHandler({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnSubmit = async (): Promise<void> => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Login form submitted:", formData);
      resetForm();
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Login successfully!",
      });
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message || "An error occurred during loign",
        });
      } else {
        console.error("An unknown error occurred during login");
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "An unknown error occurred during login",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, resetForm, handleOnChange, handleOnSubmit };
};

export default useLogin;
