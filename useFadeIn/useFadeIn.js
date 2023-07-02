import { useEffect, useRef } from "react";

export function useFadeIn(duration = 1, delay = 0) {
  const element = useRef();

  useEffect(() => {
    const { current } = element;
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    current.style.opacity = 1;
  }, [duration, delay]);

  return { ref: element, style: { opacity: 0 } };
}
