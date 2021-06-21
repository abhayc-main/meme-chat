import styled from "styled-components";
import { Avatar } from "@material-ui/core"
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Icon } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Search from "@material-ui/icons/Search";

function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconsContainer>

                     <IconButton>
                        <UnfoldMoreIcon />
                     </IconButton> 

                     <IconButton>
                         <ChatBubbleOutlineIcon />
                     </IconButton>

                </IconsContainer>

            </Header>

            <SearchIcon>
                <Search />
            </SearchIcon>
        </Container>
    )
}

export default Sidebar;

// THis is where we can have our css in a function so we can call it.
const Container = styled.div``;

const SearchIcon  = styled.div``;

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

const UserAvatar = styled(Avatar)`
    cursor: pointer;
     :hover{
         opacity: 0.8
     } 
`;

const IconsContainer = styled.div``;