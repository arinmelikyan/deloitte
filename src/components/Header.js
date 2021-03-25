import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    InputBase,
    makeStyles,
    fade
} from '@material-ui/core';
import { Dehaze } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import fetchFields from '../store/fields/actions';
import Modal from './Modal';
import Form from './Form';

const styles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#000',
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: '20px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
    bar: {
        display: 'flex', 
        justifyContent: 'space-between',
    },
    title: {
        padding: '25px'
    }
}))

const Header = ({ logo, fields, getFields, handleSidebar, title, handleSearch }) => {
    const classes = styles();

    const [modalOpen, setModalOpen] = useState(false);

    const handleEmailClick = () => {
        setModalOpen(true);
        getFields();
    };

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return (
        <AppBar className="app-header" position="static">
            <Toolbar className={classes.bar}>
                <div className={classes.bar}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebar}>
                        <Dehaze />
                    </IconButton>
                    <img className="app-logo" src={logo} alt='logo' />
                    <Typography className={classes.title} variant="h5">{title}</Typography>
                </div>
                <div className={classes.bar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" color="primary" size="large" onClick={handleEmailClick}>Email</Button>
                </div>
            </Toolbar>
            {modalOpen && (
                <Modal
                    open={modalOpen}
                    handleClose={handleModalClose}
                >
                    <Form fields={fields} />
                </Modal>
            )}
        </AppBar>
    )
};

const mapStateToProps = ({ fields }) => {
    return {
        ...fields,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFields: () => dispatch(fetchFields()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);