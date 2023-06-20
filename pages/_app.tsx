import "@/assets/blklight.scss";
import type { AppProps } from "next/app";

import Barlow from "@/components/fonts/Barlow";
import JetBrains from "@/components/fonts/JetBrainsMono";
import IBMPlexSerif from "@/components/fonts/IBMPlexSerif";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${Barlow.style.fontFamily};
          --font-serif: ${IBMPlexSerif.style.fontFamily};
          --font-mono: ${JetBrains.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
