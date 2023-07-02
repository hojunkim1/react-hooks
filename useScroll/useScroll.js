export function useScroll() {
  const [state, setState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScrollHandeler = () => {
      setState({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener("scroll", onScrollHandeler);
    return () => {
      window.removeEventListener("scroll", onScrollHandeler);
    };
  }, []);

  return state;
}
