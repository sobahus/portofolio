import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/profile-2d.svg" />
        <link rel="apple-touch-icon" href="/profile-2d.svg" />
        <title>Sobahusn Portofolio</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
