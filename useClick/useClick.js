export function useClick(onClick) {
  const element = useRef();

  useEffect(() => {
    const { current } = element;
    current.addEventListener("click", onClick);
    return () => current.removeEventListener("click", onClick);
  }, [onClick]);

  return element;
}
