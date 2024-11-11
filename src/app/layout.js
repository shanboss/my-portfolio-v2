import "./globals.css";

export const metadata = {
  title: "Manu's Portfolio",
  description: "Find out how you can give Manu some money",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
