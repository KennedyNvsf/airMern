import {Nunito} from "next/font/google";
import './globals.css';
import ToasterProvider from '@/app/providers/ToasterProvider';
//components
import { 
  ClientOnly,
  Navbar,
  RegisterModal,
  LoginModal
} from "./components";

//metadata
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb nextjs13 fullstack',
}

//initializing font family
const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
