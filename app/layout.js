import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "./themeProvider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor Quiz App",
  description: "A challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.className} bg-light-grey dark:bg-dark-navy h-screen lg:bg-[url("/pattern-background-desktop-light.svg")] dark:lg:bg-[url("/pattern-background-desktop-dark.svg")] md:bg-[url("/pattern-background-tablet-light.svg")] dark:md:bg-[url("/pattern-background-tablet-dark.svg")] dark:bg-[url("/pattern-background-mobile-dark.svg")] bg-[url("/pattern-background-mobile-light.svg")] bg-no-repeat bg-cover transition-all`}
      >
        <Provider>
          <Navbar />
          <main className="lg:max-w-[72.5rem] lg:px-0 md:px-16 px-6 mx-auto">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
