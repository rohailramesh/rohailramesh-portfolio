import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ROHAIL RAMESH",
  description: "ROHAIL RAMESH - Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (c, s, q, u, a, r, e) {
              c.hj = c.hj || function () { (c.hj.q = c.hj.q || []).push(arguments) };
              c._hjSettings = { hjid: a };
              r = s.getElementsByTagName('head')[0];
              e = s.createElement('script');
              e.async = true;
              e.src = q + c._hjSettings.hjid + u;
              r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5364960);`,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "ROHAIL RAMESH",
//   description: "ROHAIL RAMESH - Software Developer",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   );
// }
