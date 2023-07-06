import React, { Suspense } from "react";
import "../styles/globals.css";
import Loading from "./loading";
import MainHeader from "./components/header/MainHeader";
import Home from "./components/main/Home";
import Footer from "./components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <Home>{children}</Home>
        <Suspense fallback={<Loading />} />
        <Footer />
      </body>
    </html>
  );
}
