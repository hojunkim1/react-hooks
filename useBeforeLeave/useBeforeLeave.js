export function useBeforeLeave(onBefore) {
  useEffect(() => {
    const listener = (event) => {
      const { clientY } = event;
      if (clientY <= 0) onBefore();
    };
    document.addEventListener("mouseleave", listener);
    return () => document.removeEventListener("mouseleave", listener);
  }, [onBefore]);
}
