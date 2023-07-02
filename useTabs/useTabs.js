import { useState } from "react";

export function useTabs(initTab, allTabs) {
  const [currentIndex, setCurrentIndex] = useState(initTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
}
