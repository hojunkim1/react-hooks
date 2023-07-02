export function useBeforeLeave(onBefore) {
  useEffect(() => {
    const onMouseLeaveHandler = (event) => {
      const { clientY } = event;
      if (clientY <= 0) onBefore();
    };
    document.addEventListener("mouseleave", onMouseLeaveHandler);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeaveHandler);
    };
  }, [onBefore]);
}
