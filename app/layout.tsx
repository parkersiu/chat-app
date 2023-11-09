import ClientProviders from "@/components/ClientProviders";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SubscriptionProvider from "@/components/SubscriptionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "A chat app with AI translation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />

                {children}
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
