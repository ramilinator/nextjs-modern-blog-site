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
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
