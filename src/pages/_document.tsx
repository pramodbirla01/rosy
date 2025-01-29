import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to Google Fonts for the Jost font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
/>

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
