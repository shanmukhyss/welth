import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";
import { neobrutalism} from "@clerk/themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "AI Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider  appearance={{
      baseTheme:  neobrutalism,
    }}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
