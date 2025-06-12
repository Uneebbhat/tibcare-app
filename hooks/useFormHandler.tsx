import { useState } from "react";

const useFormHandler = <T extends Record<string, any>>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleOnChange = (text: keyof T) => (value: string) => {
    setFormData((prev) => ({ ...prev, [text]: value }));
    console.log(formData);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleOnChange, setFormData, resetForm };
};

export default useFormHandler;
