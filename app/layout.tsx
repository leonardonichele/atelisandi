import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AteliSandi | Artesanato em Crochê & Amigurumi",
  description:
    "Peças únicas feitas à mão com amor e dedicação. Crochê, fibra, amigurumis e muito mais. Descubra o artesanato de Sandi.",
  keywords: ["crochê", "artesanato", "amigurumi", "fibra", "handmade", "AteliSandi"],
  authors: [{ name: "AteliSandi" }],
  openGraph: {
    title: "AteliSandi | Artesanato em Crochê & Amigurumi",
    description: "Peças únicas feitas à mão com amor e dedicação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
