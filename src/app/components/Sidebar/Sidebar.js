"use client";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MdContactMail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import "./Sidebar.css"
import HomeMainContent from '../HomeMainContent/HomeMainContent';
import { FaHome } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiLogOutCircle } from "react-icons/bi";
import Link from 'next/link';
import { AuthContext } from '@/app/providers/AuthProvider/AuthProvider';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Sidebar = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const {user, logOut} = React.useContext(AuthContext)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //logout handler
    const logoutHandeler = () => {
        logOut();
      }

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar className='bg-todoBg' position="fixed" open={open}>
                    <Toolbar className='bg-black'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className='w-full text-right' variant="h6" noWrap component="div">
                            {
                                user ? <Button className='bg-yellow-600 hover:bg-yellow-500' variant="contained" onClick={logoutHandeler}>Log Out</Button>
                                :
                                <>
                                    <Link href="../../login"><Button variant="contained">Login</Button></Link>
                                <Link href="../../register" className='ml-4'><Button variant="contained">Sign Up</Button></Link>
                                </>
                            }
                        
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer className='bg-todoBg' variant="permanent" open={open}>
                    <DrawerHeader className='bg-todoBg'>
                        <IconButton className='text-todoWhite' onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon className='text-todoWhite' /> : <ChevronLeftIcon className='text-todoWhite' />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List className='bg-todoBg text-todoWhite'>

                        {/* banner section */}
                        <a href="/">
                            <ListItem className='block w-full -ml-5'>
                                <ListItemButton

                                >
                                    <ListItemIcon>
                                        <FaHome className='text-3xl hover:text-gray-200 text-todoBlue justify-center' />

                                    </ListItemIcon>
                                    Home
                                </ListItemButton>
                            </ListItem>
                        </a>
                        <a href="/about-us">
                            <ListItem className='block w-full -ml-5'>
                                <ListItemButton

                                >
                                    <ListItemIcon>
                                        <HiMiniUserGroup className='text-3xl hover:text-gray-200 text-todoBlue justify-center' />

                                    </ListItemIcon>
                                    About Us
                                </ListItemButton>
                            </ListItem>
                        </a>

                        {/* contact section */}
                        <a href="/contact">
                            <ListItem className='block w-full -ml-5'>
                                <ListItemButton

                                >
                                    <ListItemIcon>
                                        <MdContactMail className='text-2xl hover:text-gray-200 text-todoBlue justify-center' />

                                    </ListItemIcon>
                                    Contact
                                </ListItemButton>
                            </ListItem>
                        </a>

                        {/* settings section */}
                        <a href="/settings">
                            <ListItem className='block w-full -ml-5'>
                                <ListItemButton

                                >
                                    <ListItemIcon>
                                        <IoSettingsOutline className='text-2xl hover:text-gray-200 text-todoBlue justify-center' />

                                    </ListItemIcon>
                                    Settings
                                </ListItemButton>
                            </ListItem>
                        </a>

                        {/* settings section */}
                        <a>
                            <ListItem className='block w-full -ml-5' onClick={logoutHandeler}>
                                <ListItemButton

                                >
                                    <ListItemIcon>
                                        <BiLogOutCircle className='text-2xl hover:text-gray-200 text-todoBlue justify-center' />

                                    </ListItemIcon>
                                    Logout
                                </ListItemButton>
                            </ListItem>
                        </a>
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Typography>
                        <HomeMainContent></HomeMainContent>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default Sidebar;