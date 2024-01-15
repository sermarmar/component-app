import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonsComponent } from "../../components/ButtonsComponent";
import { InputsComponent } from "../../components/InputsComponent";

const drawerWidth = 240;
const itemsList = [{title: 'Inputs', component: <InputsComponent/>}, {title: 'Buttons', component: <ButtonsComponent/>}]

export const NavigatorLayout = () => {

    return(
        <>
            <Drawer sx={{
                width: drawerWidth,
                flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent" 
            anchor="left">
                <Toolbar>
                    <Typography variant="h5">Components</Typography>
                </Toolbar>
                <Divider />
                <List>
                    { 
                        itemsList.map(value => (
                            <ListItemButton key={ value.title } to={ `/${value.title.toLowerCase()}` } component={ Link }>
                                <ListItem>
                                    <ListItemText primary={ value.title } />                                    
                                </ListItem>
                            </ListItemButton>
                        ))
                    }
                </List>                
            </Drawer>
        </>
    )

}