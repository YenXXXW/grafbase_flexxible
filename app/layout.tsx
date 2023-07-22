import './globals.css';
import Navabar from '@/components/Navabar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navabar />
        <main>
          {children}
        </main>  
        <Footer />      
      </body>
    </html>
  )
}
