import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import "./globals.css";

// Components
import MainNav from "@/components/MainNav";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

export const metadata = {
  title: "Personal Portfolio",
  description: "Showcasing the projects, skills, and experience of Ayomide, a passionate software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${dmSans.variable} antialiased overflow-hidden relative`}>
        <Gradient />
        <RectangleTransition />
        <PageTransition>
        <div className="flex">
          {/* main nav */}
          <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
            <MainNav />
          </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
            <div>{children}</div>
          </div>
        </div>
        </PageTransition>
      </body>
    </html>
  );
}
