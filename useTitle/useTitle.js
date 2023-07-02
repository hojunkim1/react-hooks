import { useState } from "react";

export function useTitle(initTitle) {
  const [title, setTitle] = useState(initTitle);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
}
