import React, { useState } from 'react';
import { 
    FormGroup, 
    InputLabel, 
    FormHelperText, 
    Checkbox,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    ButtonGroup,
    Input,
    makeStyles,
} from '@material-ui/core';
import { emailValidation } from '../utils';

const styles = makeStyles(() => ({
    input: {
        borderBottom: '3px grey solid',
        width: '450px',
        marginTop: '10px',
    },
    formGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0',
    },
    email: {
        borderBottom: '3px grey solid',
        marginTop: '10px',
    },
    text: {
        fontSize: '16px',
        marginTop: '50px',
    },
    buttonGroup: {
        marginTop: '20px',
        marginLeft: '82%'
    },
    reset: {
        color: 'red',
        marginRight: '10px',
    },
    error: {
        color: 'red',
    }
}));

const Form = () => {
    const classes = styles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [invalid, setInvalid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleFirstName = (value) => {
        setFirstName(value);
    };

    const handleLastName = (value) => {
        setLastName(value);
    };

    const handleCompany = (value) => {
        setCompany(value);
    };

    const handleJob = (value) => {
        setJob(value);
    };

    const handleEmail = (value) => {
        const valid = emailValidation(value);
        setInvalid(!valid);
        setEmail(value);
    }

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setCompany('');
        setJob('');
        setEmail('');
        setInvalid(false)
    }

    const handleSubmit = (event) => {
        if (invalid) {
            setErrorMessage('invalid email');
            event.preventDefault();
        } else {
            alert('Email sent');
            event.preventDefault();
            handleReset();
        }
    }

    return (
        <form className="app-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Contact Information</h3>
            <div className={classes.formGroup}>
                <FormGroup>
                    <InputLabel>First Name</InputLabel>
                    <Input 
                      className={classes.input} 
                      required={true}
                      value={firstName} 
                      onChange={(e) => handleFirstName(e.target.value)} 
                    />
                </FormGroup>
                <FormGroup>
                    <InputLabel>Last Name</InputLabel>
                    <Input 
                      className={classes.input} 
                      required={true}
                      value={lastName} 
                      onChange={(e) => handleLastName(e.target.value)} 
                    />
                </FormGroup>
            </div>
            <div className={classes.formGroup}>
                <FormGroup>
                    <InputLabel>Company</InputLabel>
                    <Input 
                      className={classes.input} 
                      required={true}
                      value={company} 
                      onChange={(e) => handleCompany(e.target.value)} 
                    />
                </FormGroup>
                <FormGroup>
                    <InputLabel>Job Title</InputLabel>
                    <Input 
                      className={classes.input} 
                      required={true}
                      value={job} 
                      onChange={(e) => handleJob(e.target.value)} 
                    />
                </FormGroup>
            </div>
            <FormGroup>
                <InputLabel>Email</InputLabel>
                <Input 
                  className={classes.email} 
                  required={true} 
                  value={email}
                  onChange={(e) => handleEmail(e.target.value)}
                />
                {invalid && <FormHelperText className={classes.error}>{errorMessage}</FormHelperText>}
            </FormGroup>
            <FormGroup>
                <FormHelperText className={classes.text}>
                    I agree to receive emailed reports, articles, and event invitations. I understand I may unsubscribe any time by clicking the link included in emails.
                </FormHelperText> 
                <RadioGroup>
                    <FormControlLabel value="yes" control={<Radio />} label="yes" />
                    <FormControlLabel value="no" control={<Radio />} label="no" />
                </RadioGroup>
            </FormGroup>
            <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={() => {}}/>}
                  label="The submission of personal information through this page is subject to Deloitte's Privacy Statement and Legal Terms"
                />
            </FormGroup>
            <ButtonGroup className={classes.buttonGroup}>
                <Button variant="contained" className={classes.reset} onClick={handleReset}>Reset</Button>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </ButtonGroup>
        </form>
    )
};

export default Form;