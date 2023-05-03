import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} theme="dark" limit={3}/>
    </AuthProvider>
  )
}
