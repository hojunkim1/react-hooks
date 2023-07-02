export function useConfirm(message = "", onConfirm, onCancel) {
  if (!onConfirm || !onCancel) {
    console.log("need more callback yah.");
    return;
  }

  const safeCallback = (callback) => {
    if (typeof callback === "function") callback();
    else console.log(`${callback} is not a function.`);
  };

  return () => {
    if (window.confirm(message)) safeCallback(onConfirm);
    else safeCallback(onCancel);
  };
}
