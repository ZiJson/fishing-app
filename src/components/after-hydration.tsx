import { useSyncExternalStore, type ReactNode } from 'react';

const emptySubscribe = () => () => {};

/** False on the server and during hydration; true only after the client commits. */
export function useIsHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/** Renders `fallback` until hydrated, then `children` — keeps SSR/client HTML aligned. */
export function AfterHydration({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  const hydrated = useIsHydrated();
  return hydrated ? children : fallback;
}
