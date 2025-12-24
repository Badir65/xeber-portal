import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XƏBƏR.AZ - Azərbaycanın Güvənilir Xəbər Portalı",
  description:
    "Azərbaycanın ən güvənilir xəbər portalı. Siyasət, iqtisadiyyat, idman, mədəniyyət və digər sahələrdə ən son xəbərlər.",
  keywords: [
    "xəbər",
    "Azərbaycan",
    "news",
    "Azerbaijan",
    "Bakı",
    "siyasət",
    "iqtisadiyyat",
    "idman",
  ],
  authors: [{ name: "XƏBƏR.AZ" }],
  openGraph: {
    title: "XƏBƏR.AZ - Azərbaycanın Güvənilir Xəbər Portalı",
    description: "Azərbaycanın ən güvənilir xəbər portalı",
    type: "website",
    locale: "az_AZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className="antialiased">{children}</body>
    </html>
  );
}
