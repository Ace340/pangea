import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { Barlow } from "next/font/google";
import "./globals.css";
import FlowbiteScript from "@/components/FlowbiteScript";

const bebas_neue_init = Bebas_Neue({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-bebas',
});

const barlow_init = Barlow({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: "Pangea",
  description: "Agencia aduanal al menor costo, con transparencia y la mejor planificacion posible que tu proyecto necesita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.4.1/flowbite.min.css" rel="stylesheet" />
      </head> */}
      <body className={`${bebas_neue_init.className} ${barlow_init.className}`}>
        {children}        
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        {/* <FlowbiteScript /> */}
      </body>
    </html>
  );
}
