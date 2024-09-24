import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Head from "next/head"; 
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "DecentInvest",
  description: "",
};

export default function RootLayout({ children, navbar }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className} ${archivo.className}`} style={{ background: 'white' }}>
        {navbar} {/* Render the specific navbar here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
