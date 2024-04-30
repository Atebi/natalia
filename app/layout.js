import { EB_Garamond } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const eb = EB_Garamond({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Natalia Davies - Reflective Mystery Writer",
  description: "Natalia Davies' portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${eb.className} bg-bg bg-center text-milk bg-cover bg-fixed`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
