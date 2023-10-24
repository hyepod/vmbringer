import React from 'react';
import PropTypes from 'prop-types';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    tableau: {
        width: '100%',
    },
});

const styles = (theme) => ({
    root: {
        margin: 0,
        color: 'white',
        backgroundColor: '#222222',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: 'white',
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            {children}
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

function PaintingDialog(props) {
    const classes = useStyles();
    const { onClose, img, open, title, size } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            scroll='body'
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    margin: '0px',
                },
            }}
        >
            <DialogTitle id={title} onClose={handleClose}>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='body2'>{size}</Typography>
            </DialogTitle>
            <img src={img} alt={title} className={classes.tableau} />
        </Dialog>
    );
}

PaintingDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    img: PropTypes.node.isRequired,
};

export default PaintingDialog;
