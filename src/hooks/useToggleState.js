import { useState } from "react";

function useToggleState(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggleTodo = () => {
    setState(!state);
  };
  return [state, toggleTodo];
}

export default useToggleState;
