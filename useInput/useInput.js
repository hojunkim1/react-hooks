import { useState } from "react";

export function useInput(initValue, validator) {
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    const { value } = event.target;
    let isValid = true;
    if (typeof validator === "function") isValid = validator(value);
    if (isValid) setValue(value);
  };

  return { value, onChange };
}
