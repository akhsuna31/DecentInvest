import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "DecentInvest",
  description: "",
  
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{background:'white'}}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
