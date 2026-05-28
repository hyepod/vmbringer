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
        marginTop: '64px',
        marginBottom: '48px',
        maxWidth: '820px',
    },
    presentationHeader: {
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    },
    presentationTitle: {
        color: '#2b2526',
        fontWeight: 500,
        marginBottom: theme.spacing(1.5),
    },
    presentationLine: {
        width: '72px',
        height: '2px',
        margin: '0 auto',
        backgroundColor: '#940028',
    },
    presentationBody: {
        margin: '0 auto',
        maxWidth: '760px',
    },
    presentationParagraph: {
        color: '#3f383a',
        lineHeight: 1.9,
        marginBottom: theme.spacing(2),
    },
    presentationHighlight: {
        color: '#940028',
        fontWeight: 500,
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
                <Grid item xs={11} sm={9} className={classes.textPresentation}>
                    <div className={classes.presentationHeader}>
                        <Typography variant="h4" component="h2" className={classes.presentationTitle}>
                            Matière, lumière et formes suspendues
                        </Typography>
                        <div className={classes.presentationLine} />
                    </div>
                    <div className={classes.presentationBody}>
                        <Typography align="justify" className={classes.presentationParagraph}>
                            Le travail de Mariotte Bringer explore la relation subtile entre matière, lumière et formes construites. À travers la peinture à l'huile, elle développe un langage pictural où les formes — souvent sphériques — semblent émerger, flotter ou se suspendre, dans un équilibre volontairement maîtrisé.
                        </Typography>
                        <Typography align="justify" className={classes.presentationParagraph}>
                            Loin du hasard, chaque composition est décidée, structurée et pensée. La matière n'est jamais brute ni décorative : elle est travaillée en passages, en couches, afin de laisser circuler la lumière. Celle-ci ne vient pas simplement éclairer la surface, mais traverse la peinture, créant des zones de densité et de respiration.
                        </Typography>
                        <Typography align="justify" className={classes.presentationParagraph}>
                            Son univers oscille entre abstraction et évocation sensible du réel, sans jamais chercher la narration. Les formes suggèrent des présences, des paysages intérieurs, des phénomènes naturels, tout en restant ouvertes à l'interprétation du regardeur. La sphère, motif récurrent, devient un espace de tension douce : ni totalement ancrée, ni totalement dissoute.
                        </Typography>
                        <Typography align="justify" className={classes.presentationParagraph}>
                            <span className={classes.presentationHighlight}>En 2025, son oeuvre "Au-dessus des nuages" a été sélectionnée par les curateurs d'Artsy</span> et présentée dans leur collection "Curators' Picks", une sélection éditoriale mettant en avant des oeuvres jugées singulières et remarquables sur la scène artistique contemporaine.
                        </Typography>
                        <Typography align="justify" className={classes.presentationParagraph}>
                            Cette reconnaissance souligne la cohérence de son travail, fondé sur une recherche constante d'équilibre entre construction et fluidité, présence et silence, densité et lumière.
                        </Typography>
                        <Typography align="justify" className={classes.presentationParagraph}>
                            Mariotte Bringer poursuit aujourd'hui une démarche picturale exigeante et sensible, où chaque toile s'inscrit dans une continuité, sans effet ni artifice, laissant au regard le temps d'entrer en résonance avec la peinture.
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            <ButtonImage />

            <Insta />


        </div>
    );
}

export default Artist;
