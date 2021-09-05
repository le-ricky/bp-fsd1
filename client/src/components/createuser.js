import react from 'react';
import React, {useState} from 'react';
import axios from 'axios';
// import Layout from '../components/Layout';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';

const CreateUser = () => {

    const [state, setState ] = useState({
        name:'',
        email:'',
        phoneNumber:'',
        address:'',
        success:'',
        error:'',
        buttonText: 'Save'
    })

    const {name, email, phoneNumber, address, error, success, buttonText} = state;

    const handleChange = name => evt => {
        setState({
            ...state,
            [name]: evt.target.value,
            error: '',
            success: '',
            buttonText: 'Save'
        })
    }

    const handleSubmit = async evt => {
        evt.preventDefault();
        setState({...state, buttonText: 'Saving'});

        try {
            const res = await axios.post(`http://localhost:8000/api/createUser`, {
                name, email, phoneNumber, address
            })
                console.log(res)
                console.log('hello')
                // setState({
                //     ...state,
                //     name: '',
                //     email: '',
                //     phoneNumber: '',
                //     buttonText: 'Submitted',
                //     success: res.data.message
                // })
        } catch (error) {
            console.log(error)
            // setState({...state, buttonText:'Save', error: error.response.data.error}) 
        }


        try {
            const response = await axios.get(`http://localhost:8000/api/users`, {
                name, email, phoneNumber, address
            })
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        button: {
            textAlign: 'center'
        },
    }));

    const classes = useStyles();

    const createUserForm = () => (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <div className="form-group">
                        <TextField variant="filled" label="Name" fullWidth margin="normal" value={name} onChange={handleChange('name')}/>
                    </div>
                    <div className="form-group">
                        <TextField variant="filled" label="Email" fullWidth margin="normal" value={email} onChange={handleChange('email')}/>
                    </div>
                    <div className="form-group">
                        <TextField variant="filled" label="Phone Number" fullWidth margin="normal" value={phoneNumber} onChange={handleChange('phoneNumber')} />
                    </div>
                    <div className="form-group">
                        <TextField variant="filled" label="Address" fullWidth margin="normal" value={address} onChange={handleChange('address')} />
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.button}>
                    <Button variant="contained" color="primary" type="submit" >{state.buttonText}</Button>
                </Grid>
                <Grid item xs={6} className={classes.button}>
                    <Button variant="outlined" color="primary">Delete</Button> 
                </Grid>
            </Grid>
        </form>
    )
    
    return (
        <>
            {createUserForm()}
        </>
    )
}
export default CreateUser;