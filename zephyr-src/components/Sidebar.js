import styled from "styled-components"; 
import { Avatar } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { Icon, Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Search from "@material-ui/icons/Search";


function Sidebar() {

    const createChat = () => {
        const input = prompt(
            "Please enter a user's email address to chat with. "
        )
        if (!input) return null;

        if (EmailValidator.validate(input)){
            //Add chats -- we need user's login
        }
    }
    //1E1E1E => Backround Color
    return (
        <Container>
            <Header >
                
                <UserAvatar />

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

            <NewChat>New Chat</NewChat>
        </Container>
    )
}

export default Sidebar;

// THis is where we can have our css in a function so we can call it.
const Container = styled.div``;

const NewChat = styled(Button)`
    width: 100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;

`;

const SearchIcon  = styled.div`
    
`;


const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    backround-color: white;
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