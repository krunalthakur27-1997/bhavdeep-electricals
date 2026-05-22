import "./globals.css";

export const metadata = {
  title: "Bhavdeep Electricals & Engineering",
  description: "Industrial Electrical Experts Since 1988",
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
