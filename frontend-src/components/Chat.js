import styled from "styled-components";
import { auth,db } from "../firebase"
import getRecipientEmail from "../utils/getRecipientEmail"
import {useCollection} from "react-firebase-hooks/firestore"
import router, {useRouter} from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import getRecipientEmail from "../utils/getRecipientEmail";

//IMPORTSSSSSSSSSSS

function Chat({id, users}) {
    const user = useAuthState(auth)
    const [recipientSnapshot] = useCollection(
        db.collection('users').where('email', '==','',getRecipientEmail(users, user))
    )

    const enterChat = () => {
        router.push(`/chat/${id}`)
    }
    
    const recipient = recipientSnapshot?.docs?.[0]?.data()
    const recipientEmail = getRecipientEmail(users, user)
    
    return (
        <Container onClick={enterChat}>
            {recipient ? (
                 <UserAvatar src = {recipient?.photoURL} />
            ) : (
                <UserAvatar>{recipientEmail[0]}</UserAvatar>
            ) }
            <UserAvatar />
            <p>RecipientEmail</p>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background: #e9eaeb;
    }
`;

const UserAvatar = styled.div`
    margin: 5px;
    margin-right: 15px;
`;
