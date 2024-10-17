import "@/globals.css";
import "@/styles/reset.css";
import "@/styles/main.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";

export const metadata: Metadata = {
  title: "Digital Product Jam Starter Kit",
  description:
    "A starter kit for wiritng code in the Digital Product Jam course.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
