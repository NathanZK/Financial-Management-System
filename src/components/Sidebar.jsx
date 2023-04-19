import { ArrowForwardIcon, CalendarIcon, EditIcon, AddIcon } from "@chakra-ui/icons";
import { ListItem, List, ListIcon, Flex, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import { logout } from "../services/authService";

const Sidebar = () => {
    return ( 
        <Flex h= '80vh' flexDirection='column' alignItems='space-between'>
            <List color="white" fontSize="1.2em" spacing={4}>
                <ListItem>
                    <NavLink to="">
                        <ListIcon as={CalendarIcon} />
                        Dashboard
                    </NavLink>
        
                </ListItem>

                <ListItem>
                    <NavLink to="planning">
                        <ListIcon as={AddIcon} />
                        Planning
                    </NavLink>
                </ListItem>

                <ListItem>
                    <NavLink to="categories">
                        <ListIcon as={EditIcon} />
                        Categories
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="plans">
                        <ListIcon as={EditIcon} />
                        Plans
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="fundme">
                        <ListIcon as={EditIcon} />
                        Fund Me
                    </NavLink>
                </ListItem>
            </List>
            <Spacer/>
            <List color="white" fontSize="1.2em" spacing={4}>
                <ListItem>
                    <NavLink onClick={()=> logout()}>
                        <ListIcon as= {ArrowForwardIcon}/>
                        Log Out
                    </NavLink>
                </ListItem>
            </List> 
        </Flex>

        
     );
}
 
export default Sidebar;
