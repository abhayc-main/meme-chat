import styled from "styled-components"
import Head from "next/head"
import { useAuthState} from "react-firebase-hooks/auth"
import Sidebar from "../../components/Sidebar"
import { db } from "../../firebase"
import { auth } from "../firebase"


function Chat({chat, messages}) {

    const [user] = useAuthState(auth)

    return (
        <Container>
            <Head>
                <title>{getRecipientEmail(chat.users, user)}</title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen chat = {chat} messages = {messages}/>
            </ChatContainer>
        </Container>
    )
}

export default Chat

export async function getSeverSideProps(context){
    const ref = db.collections("chats").doc(context.query.id)
    // Prep Message 
    const messagesRef = await ref
    .collection('messages')
    .orderBy('timestamp','asc')
    .get()

    const messages = messagesRef.doc.map(doc =>({
        id: doc.id,
        ...doc.data(),
    })).map(messages => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }))

    //Prepping the Chat
    const chatRes = await ref.get()
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }

    return{
        props: {
            //Stringfying because the messages has to be a string
            // You cant pass an object
            messages: JSON.stringify(messages),
            chat: chat,
        }
    }
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