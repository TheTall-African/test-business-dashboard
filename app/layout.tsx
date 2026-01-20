import '@/app/ui/global.css';
import {lusi} from '@/app/ui/fonts';

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusi.className} antialiased`}>{children}</body>
    </html>
  );
}
