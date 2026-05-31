import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default:
      "Bhavdeep Electricals & Engineering | Industrial Electrical Experts",
    template: "%s | Bhavdeep Electricals",
  },
  description:
    "Bhavdeep Electricals & Engineering — Industrial electrical panels, automation, motor rewinding, maintenance and engineering solutions since 1988. Based in Vapi, Gujarat, India.",
  keywords: [
    "MCC panel Gujarat",
    "PCC panel manufacturer",
    "industrial automation",
    "motor rewinding Vapi",
    "electrical panel manufacturer Gujarat",
    "Bhavdeep Electricals",
    "APFC panel",
    "VFD repair",
    "electrical maintenance",
  ],
  authors: [{ name: "Bhavdeep Electricals & Engineering" }],
  robots: "index, follow",
  openGraph: {
    title: "Bhavdeep Electricals & Engineering",
    description: "Industrial Electrical Experts Since 1988 — Vapi, Gujarat",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
