
import Head from "next/head";
import styled from "styled-components"
import { auth, provider } from "../firebase";

function Login() {

    const signinG = () => {
        auth.signInWithPopup(provider).catch(alert)
    }


    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src= "/favicon2.ico"/>
                <GoogleButton>
                    <button onClick = {signinG} variant = "outlined">Sign In With Google</button>
                </GoogleButton>
                 
            </LoginContainer>
        </Container>
    )
}

export default Login;


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`; 

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1E1E1E;
    border-radius: 5px;
    box-shadow : 0px 4px 14px -3px rgba(0, 0, 0, 0.7)
`;

const Logo = styled.img`
    height: 400px;
    width: 400px;
    margin-bottom: 50px;
`;

const GoogleButton = styled.div`

    margin: 2px 0 5px;
    min-height: 34px;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 3px;
    -webkit-appearance: none;
    margin-top: 16px;
    padding: 6px 16px;

    `;