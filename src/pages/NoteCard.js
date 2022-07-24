import React from 'react'
import { Card, IconButton,Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import {DeleteOutlined } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import {yellow, green, pink, blue} from '@mui/material/colors'

const useStyles=makeStyles({
    test:{
        border:(note)=>{
            if(note.category=='one piece'){
                return "1px solid #778beb"
            }
            if(note.category=="bleach"){
                return "1px solid #e67e22"
            }
            if(note.category=="naruto"){
                return "1px solid #ff7979"
            }
        },
        avatar:{
            backgroundColor:(note)=>{
            if(note.category=='one piece'){
                return yellow[700]
            }
            if(note.category=="bleach"){
                return green[500]
            }
            if(note.category=="naruto"){
                return pink[500]
            }
            return blue [500]
        },
        }
    }
})

// const stil=makeStyles({
//     field:{
//         marginTop:40
//     }
// })
function NoteCard({note,handleDelete}) {
    const classes=useStyles(note);
    // const createStil=stil()
    return (
    <Card elevation={3} className={classes.test}>
        <CardHeader avatar={
            <Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>
        }  action={
        <IconButton onClick={()=>handleDelete(note.id)}>
            <DeleteOutlined/>
        </IconButton> } title={note.title} subheader={note.category}/>
        <CardContent>
            <Typography variant='body1' color="textSecondary">{note.details}</Typography>
        </CardContent>
    </Card>
    )
}

export default NoteCard
