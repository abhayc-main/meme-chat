import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth, db} from "../firebase"
import login from '../pages/login'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }) {

  const [user, loading] = useAuthState(auth)
  //Loading functionality
  if(loading) return <Loading />

  if (!user) return <login />

  return <Component {...pageProps} />
}

export default MyApp;
