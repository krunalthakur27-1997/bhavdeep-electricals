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
      "Bhavdeep Electricals & Engineering | HT & LT Power Infrastructure Experts",
    template: "%s | Bhavdeep Electricals",
  },

  description:
    "Bhavdeep Electricals & Engineering provides HT & LT electrical installation, transformer installation, VCB panels, electrical panels, industrial maintenance, motor rewinding, automation, solar solutions and engineering services since 1988. Based in Umbergaon, Gujarat.",

  keywords: [
    "HT installation Gujarat",
    "LT installation Gujarat",
    "Transformer installation",
    "VCB panel installation",
    "Electrical panel manufacturer Gujarat",
    "Industrial electrical contractor",
    "Solar installation Gujarat",
    "Bhavdeep Electricals",
    "Umbergaon electrical contractor",
  ],

  authors: [{ name: "Bhavdeep Electricals & Engineering" }],

  robots: "index, follow",

  openGraph: {
    title: "Bhavdeep Electricals & Engineering",
    description:
      "HT & LT Electrical Infrastructure Experts Since 1988 - Umbergaon, Gujarat",
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
