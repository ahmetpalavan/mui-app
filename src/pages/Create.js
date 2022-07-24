import { useState } from "react"
import { Container } from "@mui/system"
import { Button,  FormControl,  FormControlLabel,  FormLabel,  TextField } from "@mui/material"
import {RadioGroup,Radio} from "@mui/material"
import {useNavigate} from "react-router-dom"

export default function Create() {
    

    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [details, setDetails] = useState('');
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState("");
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,details);

        setDetailsError(false);
        setTitleError(false);
        if(title===""){
            setTitleError(true)
        }
        if(details===""){
            setDetailsError(true)
        }
        if(title&& details){
            fetch("http://localhost:8000/notes",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({title,details,category})
            }).then(()=>navigate('/'))
        }
    }
    return (
    <Container>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField style={{marginTop:20, marginBottom:20, display:"block"}} error={titleError} label="Not Başlık" fullWidth   onChange={(e)=>setTitle(e.target.value)} variant="standard"/><br/>
            <TextField  style={{marginTop:20, marginBottom:20, display:"block"}} error={detailsError} label="Not Detayı" fullWidth   onChange={(e)=>setDetails(e.target.value)} variant="standard"/><br/>
            <FormControl style={{marginTop:20, marginBottom:20, display:"block"}}>
                <FormLabel>Not Kategorisi</FormLabel>
                <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                <FormControlLabel  value="onepiece" label="One Piece" control={<Radio/>}/>
                <FormControlLabel value="bleach" label="Bleach" control={<Radio/>}/>
                <FormControlLabel value="naruto" label="Naruto" control={<Radio/>}/>
            </RadioGroup>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Oluştur</Button>
        </form>
    </Container>
)
}
