
import Head from "next/head";
import styled from "styled-components"
import { auth } from "../firebase";

function login() {
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src= ""/>
                <Button onClick = {signin} variant = "outlined">Sign In With Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default login;


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
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;