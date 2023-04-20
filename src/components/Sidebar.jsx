import { ArrowForwardIcon, CalendarIcon, EditIcon, AddIcon, BellIcon, TimeIcon, SmallAddIcon } from "@chakra-ui/icons";
import { ListItem, List, ListIcon, Flex, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"
import { logout } from "../services/authService";

const Sidebar = () => {
    return ( 
        <Flex position='fixed' h= '80vh' flexDirection='column' alignItems='space-between'>
            <List color="white" fontSize="1.2em" spacing={4}>
                <ListItem>
                    <NavLink to="">
                        <ListIcon as={CalendarIcon} />
                        Dashboard
                    </NavLink>
        
                </ListItem>
                <ListItem>
                    <NavLink to="categories">
                        <ListIcon as={EditIcon} />
                        Categories
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="planning">
                        <ListIcon as={AddIcon} />
                        Planning
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="plans">
                        <ListIcon as={TimeIcon} />
                        Budget
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="fundme">
                        <ListIcon as={BellIcon} />
                        Fund Me
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="campaigns">
                        <ListIcon as={SmallAddIcon} />
                        Campaigns
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
