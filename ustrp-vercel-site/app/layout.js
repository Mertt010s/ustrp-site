import "./globals.css";

export const metadata = {
  title: "USTRP | United States Turkish RP",
  description: "USTRP — PTFS üzerinde uçuş, havacılık ve rol yapma topluluğu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}