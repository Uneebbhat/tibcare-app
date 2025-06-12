import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import useFormHandler from "../useFormHandler";

const useSignup = () => {
  const router = useRouter();
  const { formData, resetForm, handleOnChange } = useFormHandler({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnSubmit = async (): Promise<void> => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Signup form submitted:", formData);
      resetForm();
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Account created successfully!",
      });
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Signup error:", error.message);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message || "An error occurred during signup",
        });
      } else {
        console.error("An unknown error occurred during signup");
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "An unknown error occurred during signup",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return { formData, loading, resetForm, handleOnChange, handleOnSubmit };
};

export default useSignup;
