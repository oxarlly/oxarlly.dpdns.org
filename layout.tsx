// app/layout.tsx
import { RybbitProvider } from 'next-rybbit';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RybbitProvider siteId="1839">
          {children}
        </RybbitProvider>
      </body>
    </html>
  );
}