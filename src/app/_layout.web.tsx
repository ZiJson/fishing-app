// Web-only layout route with shadcn sidebar added to the root layout.
// This is a more desktop/web-friendly tab bar.

import { ShadLayoutFull } from "@/components/dom/shad-layout";
import { Slot } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  // Expo Router renders this tree inside the document on the server and
  // hydrates only #root in the browser, so useId values cannot match.
  // Mount the interactive UI after hydration to avoid that mismatch.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <ShadLayoutFull>
      <Slot />
    </ShadLayoutFull>
  );
}
