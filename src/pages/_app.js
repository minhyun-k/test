import { Suspense } from "react";
import Header from "../component/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Suspense fallback={<div>준비중...</div>}> {/* 로딩이 필요한 컴포넌트에 사용*/}
        <Component {...pageProps} />;
      </Suspense>
    </>

  )
}
