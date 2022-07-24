import { makeStyles } from '@mui/styles'
import React from 'react'
import { Drawer,List, ListItem, ListItemText,ListItemIcon,AppBar,Toolbar} from '@mui/material'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import {Typography} from '@mui/material'
import Avatar from '@mui/material/Avatar';


const drawerWidth=240

const useStyle=makeStyles((theme)=>{
    return{
    page:{
        backgroundColor:"#f9f9f9",
        width:"100%",
        padding: theme.spacing(3)
    },
    title:{
        fontSize:25,
        padding: theme.spacing(3)
    },
    root:{
        display:"flex",
    
    },
    drawer:{
        width:197,
        
    },
    drawerPaper:{
        width:drawerWidth
    },
    active:{
        backgroundColor:"#f4f4f4"
    },
    appBar:{
        width:`calc(100% - ${drawerWidth}px)`,
        marginLeft:drawerWidth,
    },
    toolbar:theme.mixins.toolbar,
    avatar:{
        marginLeft:theme.spacing(2)
    }
    
}})

export default function Layout({children}) {
    const classes=useStyle();
    const navigate=useNavigate();
    const location=useLocation();
    const menuItems=[
        {
            text:"Notlar",
            icon:<SubjectOutlined color='secondary'></SubjectOutlined>,
            path:"/"
        },
        {
            text:"Yeni Not",
            icon:<AddCircleOutlineOutlined color='primary'></AddCircleOutlineOutlined>,
            path:"/create"
        }
    ]

    return (
    <div className={classes.root}>
        <AppBar className={classes.appBar} color="secondary" position='fixed' elevation={0} >
            <Toolbar>
                <Typography >
                    ddddddddddddddddddddddddddd     Manga Notları
                </Typography>
                <Avatar className={classes.avatar} variant="rounded"><Typography>MNG</Typography></Avatar>
            </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} variant="permanent" classes={{paper:classes.drawerPaper}} anchor="left">
            <div>
                <Typography variant='h5'>
                    One Piece Notlar
                </Typography>
            </div>
            <List>
                {menuItems.map((item)=>(
                    <ListItem button key={item.text} onClick={()=>navigate(item.path)} className={location.pathname===item.path? classes.active:null}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <div className={classes.page}>
            <div className={classes.toolbar}/>
            {children}
        </div>
    </div>
    )
}
