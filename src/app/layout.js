import { Inter, Archivo } from "next/font/google"; // Add Archivo if not already added
import "./globals.css";
import Navbar from "@components/components/Navbar";
import Home from "../pages/Home";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "DecentInvest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${archivo.className}`} style={{ background: 'white' }}>
        <Navbar />
        <Home />
        {children}
      </body>
    </html>
  );
}