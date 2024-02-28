"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Toaster from "./components/Toaster";
// import NavBar from "@/components/NavBar";
import Provider from "@/provider";
import ContinueNews from "./components/NewsComponents/ContinueNews";
import  useNavigation  from "next/navigation";
import { usePathname } from 'next/navigation';
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: " News App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
//  const navigation = useNavigation();
 const pathname = usePathname();

  const isHomePage = pathname === '/';
  return (
    <html lang="en">
      <body className={inter.className}>


        <Provider>
     
          <NavBar /> 
          {isHomePage && <ContinueNews></ContinueNews>}
            <main className="pt-24 min-h-[calc(100vh-68px)]">{children}</main>
        </Provider>
  
        <Footer />
        <Toaster/>
      </body>
    </html>
  );
}
