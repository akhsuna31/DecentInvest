import { Inter, Archivo } from "next/font/google"; // Add Archivo if not already added
import "./globals.css";
import Navbar from "@components/components/Navbar";
import Home from "../pages/Home";
import Head from "next/head"; // Import Head

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "DecentInvest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags, links, or stylesheets can go here */}
      </Head>
      <body className={`${inter.className} ${archivo.className}`} style={{ background: 'white' }}>
        <Navbar />
        <Home />
        {children}
      </body>
    </html>
  );
}