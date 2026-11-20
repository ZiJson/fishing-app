// Web-only layout route with shadcn sidebar added to the root layout.
// This is a more desktop/web-friendly tab bar.
import '../global.css';

import { AfterHydration } from '@/components/after-hydration';
import { ShadLayoutFull } from '@/components/dom/shad-layout';
import { Skeleton } from '@/components/ui/skeleton';
import { Slot } from 'expo-router';

function WebShellFallback() {
  return (
    <div className="flex min-h-screen w-full flex-col pb-10">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex" />
      <div className="flex flex-col gap-4 sm:gap-4 sm:py-4 sm:pl-14">
        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Skeleton className="size-8 sm:hidden" />
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="size-8 rounded-full" />
        </div>
        <div className="flex flex-col gap-4 px-4 md:gap-6 md:py-2 lg:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
          </div>
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-96 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function RootLayout() {
  // Expo SSR + #root hydration breaks Radix/Chart useId. Defer the interactive
  // tree with useSyncExternalStore so SSR/hydration both show the skeleton.
  return (
    <AfterHydration fallback={<WebShellFallback />}>
      <ShadLayoutFull>
        <Slot />
      </ShadLayoutFull>
    </AfterHydration>
  );
}
