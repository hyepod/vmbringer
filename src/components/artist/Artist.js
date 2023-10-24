import React from 'react';
import { Parallax } from 'react-parallax';
import main_picture from '../../img/5.jpg'
import ButtonImage from './ButtonImage';
import Insta from './Insta';
import useWindowDimensions from '../hooks/useWindowDimensions';

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '48px !important',
    },
    gridPillar: {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,

        color: 'white',
        [theme.breakpoints.down('xs')]: {
            height: '900px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '750px',
        },
    },
    textPresentation: {
        marginTop: '48px',
    },
    para: {

    },

}));

export function Artist() {
    const classes = useStyles();

    const { height } = useWindowDimensions();

    return (
        <div className={classes.root}>
            <Parallax
                bgImage={main_picture}
                bgImageAlt="Nature Morte"
                strength={600}
                className={classes.para}
            >
                <Grid container direction="column" justify="center" alignItems="center" style={{ height: height }} className={classes.gridPillar}>
                    <Grid item container style={{ height: '90%', }} alignItems="center" justify="center">
                        <Typography variant="h1" align="center">Véronique Mariotte Bringer</Typography>
                    </Grid>

                    <div className="scroll-down" >
                        {/* <a className="btn-circle page-scroll btn-lg btn btn-default" href="#scroll_to">
                        <KeyboardArrowDownIcon style={{fontSize:'60px'}}/>
                    </a> */}
                        <div className="btn-circle page-scroll btn-lg btn btn-default" href="#scroll_to">
                            <KeyboardArrowDownIcon style={{ fontSize: '60px' }} />
                        </div>
                    </div>

                </Grid>
            </Parallax>


            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={11} sm={8} className={classes.textPresentation}>
                    <Typography align="center">
                        Véronique Mariotte Bringer est une artiste peintre utilisant l'huile et principalement la technique des peintures flamandes du 17e siècle (clair-obscur).
                        Elle travaille sur la concentration de la lumière (nature morte, paysage, portrait, abstraction...).
                </Typography>
                </Grid>
            </Grid>

            <ButtonImage />

            <Insta />


        </div>
    );
}

export default Artist;