import styled from "styled-components";
import { Avatar } from "@material-ui/core"
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Icon } from "@material-ui/core";
import IconButton from 'material-ui/IconButton';

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
        </Container>
    )
}

export default Sidebar;

// THis is where we can have our css in a function so we can call it.
const Container = styled.div`

`;

const Header = styled.div`

`;

const UserAvatar = styled(Avatar)``;

const IconsContainer = styled.div``;