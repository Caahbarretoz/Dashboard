import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Dashboard</title>
      </Head>
      <html lang="en" className="bg-gray-50">
        <body>{children}</body>
      </html>
    </>
  );
}
