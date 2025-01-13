import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/shared/header";

import "./globals.css";

// import { Providers } from "@/shared/components/shared/providers";

export const metadata: Metadata = {
    title: "Next-Pizza",
    description: "Pizza next app",
};

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link data-rh='true' rel='icon' href='/logo.png' />
            </head>
            <body className={nunito.className}>
                <Header />
                {/* <Providers> */}
                {children}
                {/* </Providers> */}
            </body>
        </html>
    );
}

// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
