import { useEffect, RefObject } from "react";

const useFollowMouse = (target: string | RefObject<HTMLElement>): void => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 20;
      const offsetY = (e.clientY / innerHeight - 0.5) * 20;

      let elements: HTMLElement[] = [];

      if (typeof target === "string") {
        elements = Array.from(document.querySelectorAll<HTMLElement>(target));
      } else if (target.current) {
        elements = [target.current];
      }

      elements.forEach((el) => {
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [target]);
};

export default useFollowMouse;
