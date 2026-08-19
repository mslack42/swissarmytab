import { useEffect } from "react";

export function useDebouncedEffect(
  effect: () => void | (() => void),
  deps: React.DependencyList,
  delay: number = 0.4,
) {
  useEffect(() => {
    const handler = setTimeout(
      () => {
        effect();
      },
      Math.floor(delay * 1000),
    );

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
}
