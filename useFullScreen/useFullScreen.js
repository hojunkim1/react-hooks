export function useFullScreen(callback) {
  const element = useRef();

  const safeCallback = (isFull) => {
    if (callback && typeof callback === "function") callback(isFull);
  };

  const triggerFull = () => {
    const { current } = element;
    current.requestFullscreen();
    safeCallback(true);
  };

  const exitFull = () => {
    document.exitFullscreen();
    safeCallback(false);
  };

  return { element, triggerFull, exitFull };
}
