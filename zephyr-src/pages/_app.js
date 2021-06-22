import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from "../backend/firebase"
import login from './login'

function MyApp({ Component, pageProps }) {

  const [user] = useAuthState(auth)

  if (!user) return <login />

  return <Component {...pageProps} />
}

export default MyApp
