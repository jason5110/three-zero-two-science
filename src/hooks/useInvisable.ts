import { useState } from "react";

const useInvisable = () => {
  const [invisable, setInvisable] = useState(false);

  return {
    invisable,
    setInvisable
  }
}

export default useInvisable;