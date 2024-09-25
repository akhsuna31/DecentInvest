import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "DecentInvest",
  description: "",
};

// Move viewport configuration to its own export
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children, navbar }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${archivo.className}`} style={{ background: 'white' }}>
        {navbar} {/* Render the specific navbar here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
