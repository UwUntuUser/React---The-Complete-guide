import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const isValid = validationFn(value);
  function handleInputChange(value) {
    setValue(value);

    setIsEditing(false);
  }

  function handleOnBlur() {
    setIsEditing(true);
  }
  return {
    value,
    handleInputChange,
    handleOnBlur,
    hasError: isEditing && !isValid,
  };
}
