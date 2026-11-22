import './globals.css';

export const metadata = { title: 'UNIVERSA — цифровой кампус', description: 'Твой университет — в одном пространстве' };

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}
