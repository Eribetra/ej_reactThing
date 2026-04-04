import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Pecorino Bar & Trattoria",
  description: "O melhor da cozinha italiana em São Paulo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head><meta name="apple-mobile-web-app-title" content="Pecorino" /></head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
