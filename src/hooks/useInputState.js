import { useState } from "react";

export default function useInputState(initialInput) {
  const [input, setInput] = useState(initialInput);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const clearInput = () => {
    setInput("");
  };
  return [input, onChange, clearInput];
}
