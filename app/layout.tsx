import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./font";
import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "NotiFiverr",
  description:
    "A simple web app to notify you after a set amount of time passes so that you can refresh your fiverr account, created by Dev Saqib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans container`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
