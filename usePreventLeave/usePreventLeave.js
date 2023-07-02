export function usePreventLeave() {
  const onBeforeUnloadHandler = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", onBeforeUnloadHandler);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", onBeforeUnloadHandler);
  };
  return { enablePrevent, disablePrevent };
}
