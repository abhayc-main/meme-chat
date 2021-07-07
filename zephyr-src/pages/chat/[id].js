import styled from "styled-components"
import Head from "next/head"
import Sidebar from "../../components/Sidebar"

function Chat() {
    return (
        <Container>
            <Head>
                <title>Chat</title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen />
            </ChatContainer>
        </Container>
    )
}

export default Chat

export async function getSeverSideProps(context){
    const ref = db.collections("chats").doc(context.query.id)
    // Prep Message 
    const messagesRef = await ref.collection('messages').orderBy('timestamp','asc').get()
}

const Container = styled.div`
    display : flex

    `;

const ChatContainer = styled.div`
    flex: 1;
    overflow : scroll;
    height : 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none ;
    scrollbar-width: none;
`;