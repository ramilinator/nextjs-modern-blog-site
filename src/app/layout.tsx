import "./globals.css";
import { ThemeProvider } from "@/src/app/components/themeProvider";
import Header from "@/src/app/components/layout/Header";
import Footer from "@/src/app/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main>
            <div className="max-w-[960px] mx-auto">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
