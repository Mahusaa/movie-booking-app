import React, { Suspense } from "react";
import "../styles/globals.css";
import Loading from "./loading";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/footer/footer";
import { ReduxProvider } from "@/store/provider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
      <MainHeader />
        {children}
        <Suspense fallback={<Loading />} />
        </ReduxProvider>
      </body>
    </html>
  );
}
