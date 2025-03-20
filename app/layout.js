import "./globals.css";

export const metadata = {
  title: "KumarArts91",
  description: "At Kumararts91, our creative team offers exceptional branding, graphic design, digital art, web design, and multimedia solutions, turning your vision into innovative, customized designs that leave a lasting impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


