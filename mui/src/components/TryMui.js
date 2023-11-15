import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
    CollectionsBookmark,
    Edit,
    Feedback,
    Help,
    PermMedia,
    UploadFile,
    Work,
} from "@mui/icons-material";
import HeaderText from './HeaderText';
import PokemonListView from './PokemonListView';
import { Link } from 'react-router-dom';

const drawWidth = 240;

export default function TryMui() {
    const [mobileViewOpen, setMobileViewOpen] = React.useState(false);

    const handleToggle = () => {
        setMobileViewOpen(!mobileViewOpen);
    };
    const responsiveDrawer = (
        <div style={{
            backgroundColor: "#09212E",
            height: "100%"
        }}>
            <Toolbar />
            <Divider />
            <Typography
                sx={{
                    textAlign: "center", pt: 4,
                    color: "green", fontSize: 20
                }}
            >
                Pokedex App
            </Typography>
            <List sx={{ backgroundColor: "#09212E" }}>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<Help />}
                    </ListItemIcon>
                    <ListItemText primary={"How to write"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<CollectionsBookmark />}
                    </ListItemIcon>
                    <ListItemText primary={"Posts"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<UploadFile />}
                    </ListItemIcon>
                    <ListItemText primary={"Pick Article"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<Edit />}
                    </ListItemIcon>
                    <ListItemText primary={"Improve"} />
                </ListItemButton>

            </List>
            <Divider />
            <List>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<Edit />}
                    </ListItemIcon>
                    <ListItemText primary={"Suggest"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<Work />}
                    </ListItemIcon>
                    <ListItemText primary={"Work with us"} />
                </ListItemButton>
                <ListItemButton sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<PermMedia />}
                    </ListItemIcon>
                    <ListItemText primary={"Media"} />
                </ListItemButton>
                <ListItemButton component={Link} to="/about" sx={{ color: "white" }}>
                    <ListItemIcon sx={{ color: "white" }}>
                        {<Feedback />}</ListItemIcon>
                    <ListItemText primary={"About us"} />
                </ListItemButton>
            </List>

        </div>
    );
    return (
        <div>
            <div>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawWidth}px)` },
                            ml: { sm: `${drawWidth}px` },

                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={handleToggle}
                                sx={{ mr: 2, display: { sm: "none" } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>

                    </AppBar>

                    <Box
                        component="nav"
                        sx={{
                            width: { sm: drawWidth },
                            flexShrink: { sm: 0 }
                        }}
                    >
                        <Drawer
                            variant="temporary"
                            open={mobileViewOpen}
                            onClose={handleToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: "block", sm: "none" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawWidth,
                                },
                            }}
                        >
                            {responsiveDrawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: "none", sm: "block" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawWidth,
                                },
                            }}
                            open
                        >
                            {responsiveDrawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            width: { sm: `calc(100% - ${drawWidth}px)` },
                        }}
                    >
                        <Toolbar />
                        <div className="pokedex-app">
                            <HeaderText />
                            <PokemonListView />
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
