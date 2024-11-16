import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
})


export const metadata = {
  title: "Opinion Hub",
  description: "A platform to discuss ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} container`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
