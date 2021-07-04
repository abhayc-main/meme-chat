import styled from "styled-components"; 
import { Avatar } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { Icon, Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Search from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator"
import { auth } from "../firebase"
import { db } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'


function Sidebar() {
    const [user] = useAuthState(auth)
    const userchatref = db.collection('chats').where('users',"array-contains", user.email)
    const [chatsSnap] = useCollection(user)

    const createChat = () => {
        const input = prompt(
            "Please enter a user's email address to chat with. "
        )
        if (!input) return null;
        // EmialValidator returns a boolean value that shows us if 
        if (EmailValidator.validate(input) && !chatAlreadyExists(inputs) && input != user.email){
            //We gon have a collection => every single document is a chat => then its gon have an users array

            db.collection('chats').add({

            })
        }
    }

    const chatAlreadyExists = (recipients) => {
        chatsSnap?.docs.find(
            (chat) => 
                chat.data().users.find((user)=> user === recipientEmail)?.length > 0)
    }
    //1E1E1E => Backround Color
    return (
        <Container>
            <Header >
                
                <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />
 
                <IconsContainer>
                    
                    <IconButton>
                         <ChatIcon />
                     </IconButton> 

                     <IconButton>
                        <MoreVertIcon />
                     </IconButton> 

                </IconsContainer>

            </Header>

            <SearchIcon>
                <Search />
                <SearchInput placeholder="Search in chat" />
            </SearchIcon>

            <NewChat onClick = {createChat}>New Chat</NewChat>

            {chatsSnap?.docs.map(chat => (
                <Chat key={chat.id} id={chat.id} users = {chat.data().users} />
            ))}
        </Container>
    )
}

export default Sidebar;

// THis is where we can have our css in a function so we can call it.
const Container = styled.div``;

const NewChat = styled(Button)`
    background-color: #7A63FF !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;

`;

const SearchIcon  = styled.div`
    
`;


const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const SearchInput = styled.input`
    outline-width: 0;
    flex: 1;
    border: none;
`;


const UserAvatar = styled(Avatar)`
    cursor: pointer;
     :hover{
         opacity: 0.8
     } 
`;

const IconsContainer = styled.div``;