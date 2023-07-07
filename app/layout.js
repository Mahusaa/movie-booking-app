import React, { Suspense } from "react";
import "../styles/globals.css";
import Loading from "./loading";
import MainHeader from "./components/header/MainHeader";
import Home from "./components/main/Home";
import Footer from "./components/footer/footer";
import { ReduxProvider } from "@/store/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
        <MainHeader />
        <Home>{children}</Home>
        <Suspense fallback={<Loading />} />
        <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
