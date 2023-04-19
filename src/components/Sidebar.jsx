import { AtSignIcon, CalendarIcon, EditIcon, AddIcon } from "@chakra-ui/icons";
import { ListItem, List, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return ( 
        <List color="white" fontSize="1.2em" spacing={4}>
            <ListItem>
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </NavLink>
    
            </ListItem>

            <ListItem>
                <NavLink to="/planning">
                    <ListIcon as={AddIcon} />
                    Planning
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to="/categories">
                    <ListIcon as={EditIcon} />
                    Categories
                </NavLink>
            </ListItem>

            
        </List>
     );
}
 
export default Sidebar;
