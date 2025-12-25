import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}