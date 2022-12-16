import React, { useRef, useEffect } from "react";

export const useOutClick = (callback: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function modalOutClick(event: MouseEvent) {
      const target = event.target as HTMLDivElement;
      const element = ref.current;

      if (null !== element) {
        if (!element.contains(target)) {
          callback(false);
        }
      }
    }
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  return ref;
};
