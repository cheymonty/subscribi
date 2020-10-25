import React from 'react';
import styles from './Home.module.css';
import {Typography, Button, TextField, Card, CardContent,IconButton, Grid} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import {Icon, preselects, today} from '../Base'


const Home = () => {
    const [state, setState] = React.useState({
      
        subscriptions: JSON.parse(localStorage.getItem("subs")) || [],
        subscriptionName: "",
        startDay: "",
        endDay: ""
    })



    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function done() {
    handleClose()

    let year = state.endDay.slice(0,4)
    let month = parseInt(state.endDay.slice(5, 7)) - 1
    let day = state.endDay.slice(8,10)
    
    month = new Date(year, month, day).toLocaleString('default', { month: 'long'});
  

    let temp;

    let fin = `${month} ${day}, ${year}`
    preselects.forEach(function (item) {
        if (state.subscriptionName.toLowerCase() === item.name) 
            temp = {name: state.subscriptionName, startDay: state.startDay, endDay: fin, color: item.color}  
    
    })

    if (!temp) 
        temp = {name: state.subscriptionName, startDay: state.startDay, endDay: fin, color: "#7328FF"}
   

 
    let s = state.subscriptions

    s.unshift(temp)


    setState({
        subscriptions: s,
        subscriptionName:"",
        startDay: "",
        endDay: "",
    })


    localStorage.setItem("subs", JSON.stringify(s))



  }

 function newSub(evt) {
    console.log("added")

     const value = evt.target.value;
   
     switch(evt.target.id) {
        case 'startDay':
            setState({
                subscriptions: state.subscriptions,
                subscriptionName: state.subscriptionName,
                startDay: value,
                endDay: state.endDay,
                
            });
            break;

        case 'endDay':
            setState({
                subscriptions: state.subscriptions,
                subscriptionName: state.subscriptionName,
                startDay: state.startDay,
                endDay: value,
                
            });

            break;
        default:
            setState({
                subscriptions: state.subscriptions,
                subscriptionName: value,
                startDay: state.startDay,
                endDay: state.endDay,
                
            });

            break;
     }
  
   
         
  };

  function deleteSub(name) {
    console.log(name)
    
    let subs = JSON.parse(localStorage.getItem("subs")) 
    
    if (subs) {
       
        subs = subs.filter(function(value, i) {
            return value.name.toLowerCase() !== name
        })
        

        localStorage.setItem("subs", JSON.stringify(subs))


        setState({
        subscriptions: subs,
        subscriptionName:"",
        startDay: "",
        endDay: "",
        })


  
    }


  }


    return (
        
        <div className={styles.container}>
            <Typography variant="h2" style={{color: "#fff", backgroundColor:"#ff8883", marginBottom: 20}}>SUBSCRIBI</Typography>
             <Button onClick={handleClickOpen} variant="contained" style={{marginBottom: 20, color:"#fff", backgroundColor:"#ff8883"}}>Add a subscription</Button>
             
            <div className={styles.innerContainer}>
            <Dialog open={open} onClose={handleClose}aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter Subscription Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                

                <TextField id="textfield" label="Subscription Name" onBlur={newSub} style={{marginRight: 20}}  />
                
                <TextField
                    id="startDay"
                    label="Start day"
                    type="date"
        
                    defaultValue={today()}
                    style={{marginRight: 20}}
                    onChange={newSub}
                    InputLabelProps={{shrink: true,}}/>
                
                <TextField
                    id="endDay"
                    label="End day"
   
                    type="date"
                    defaultValue={today()}
                    onChange={newSub}
                    InputLabelProps={{ shrink: true,}}/>
      
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={done} color="primary">DONE</Button>
                </DialogActions>
            </Dialog>

                <Grid container direction="row" spacing={5}  style={{marginLeft: 40, marginRight: 40}}>   
                {state.subscriptions.map((sub) => 
               
                <Card style={{maxWidth: 275, margin: 20}}>
                   
                        <CardContent>
                        
                            <Icon color={sub.color} icon={sub.logo} name={sub.name.toLowerCase()}/>
                            <Typography>{sub.name}</Typography>
                            <Typography>{sub.endDay}</Typography>
                         
                            <IconButton onClick={_ => deleteSub(sub.name.toLowerCase())}>
                                <DeleteIcon fontSize="small" style={{color: sub.color}} />
                            </IconButton>  
                            
                            
                        
                        </CardContent>
                   
                    </Card>

                )} 
                
                

                </Grid>         
                      
                
        
                </div>
        </div>
    );
}

export default Home;