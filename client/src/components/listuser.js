import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ListUser = () => {

    const [state, setState ] = useState({
        users: [
            {
                name: 'Ricky',
                email: 'ricky@email.com',
                phoneNumber: '1234567890'
                
            },
            {
                name: 'Tony',
                email: 'tony@email.com',
                phoneNumber: '1234567890'
            
            },
            {
                name: 'bob',
                email: 'bob@email.com',
                phoneNumber: '1111111111'
                
            }
        ]
    })

    const {users} = state;

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
    }));
      
    const classes = useStyles();

    const onRenderUsers = () => {
        const userList = users.map(user => {
            return (
                <>
                    <ListItem>
                        <ListItemText primary={user.name} secondary={`${user.email} | ${user.phoneNumber}`}/>
                            <div className={classes.root}>
                                <Button variant="outlined" color="primary">Edit</Button>
                                <Button variant="outlined" color="primary">Delete</Button>
                            </div>
                    </ListItem>
                    <Divider />
                </>
            )
        })

        return userList
    }

    
    return (
        <>
            <List>
                {onRenderUsers()}   
            </List>
        </>
    )
}

export default ListUser;
