import '../styles/tailwind.css';

export const metadata = {
  title: 'Next.js / Typescript Template',
  description:
    'Project boilerplate with Typescript, Nextjs and TailwindCss',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
