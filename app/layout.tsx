import "./globals.css";

export const metadata = {
  title: "Jason Next App",
  description: "Jason cool next app",
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
