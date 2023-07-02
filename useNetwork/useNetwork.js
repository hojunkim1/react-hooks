export function useNetwork(onChange) {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handler = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, [onChange]);

  return status;
}
