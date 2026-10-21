import { Providers } from "@/components/providers";
import { DemoNavbar } from "./_components/demo-navbar";
import "./globals.css";
// These values describe the site. A page can export its own title.
export const metadata = {
  title: { default: "Front End Demos", template: "%s | Front End Demos" },
  description:
    "Small, working lessons in interface design and development for high school students.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only fixed top-3 left-3 z-50 rounded bg-background p-3 focus:not-sr-only"
        >
          Skip to content
        </a>
        <Providers>
          <DemoNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
