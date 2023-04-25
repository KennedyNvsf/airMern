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
//actions
import getCurrentUser from "./actions/getCurrentUser";

//metadata
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb nextjs13 fullstack',
}

//initializing font family
const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
