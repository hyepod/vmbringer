import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BrushIcon from '@material-ui/icons/Brush';


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '64px',
		marginBottom: 'auto',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '64px',
		},
	},
	information: {
		// [theme.breakpoints.down('sm')]: {
		//     marginBottom: '64px',
		// },
	},
	title: {
		marginTop: '34px',
		marginBottom: '34px',
		fontWeight: '500',
	},
}));

export function Cours() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' alignItems='center'>
				<Helmet>
					<title>{"Vmbringer - Cours - Peinture - Millau - Aveyron"}</title>
					<meta name="description" content="Cours de peinture avec Véronique Mariotte Bringer - Peinture - Millau - Aveyron" />
					<link rel="canonical" href="https://vmbringer.fr/cours" />
				</Helmet>
				<Grid item sm={12}>
					<Typography variant="h2" component="h1" align="center" className={classes.title}><span className='title_span'>COURS</span></Typography>
				</Grid>
				<Grid item xs={12} sm={10} md={6} className={classes.information}>
					<Paper elevation={3}>
						<Grid container direction="column" justify='center' alignItems='center' style={{ paddingTop: '24px', paddingBottom: '24px' }}>
							<Grid item container direction="row" wrap="nowrap" style={{ marginBottom: '12px' }} justify='center' alignItems='center'>
								<BrushIcon className={classes.icons} />
								<Typography style={{ marginLeft: '8px' }}>
									Cours de peinture à l'huile à Millau
                            </Typography>
							</Grid>
							<Grid item container direction="row" wrap="nowrap" style={{ marginBottom: '12px' }} justify='center' alignItems='center'>
								<Typography style={{ marginLeft: '8px' }} align='center'>
									Vous voulez apprendre la peinture à l'huile, que vous soyez débutant ou intermédiaire
									Véronique vous apprend ses techniques afin de peindre vos plus beaux tableaux !
                            </Typography>
							</Grid>
							<Grid item container direction="column" wrap="nowrap" justify='center' alignItems='center'>
								<Typography style={{ marginLeft: '8px' }}>
									Cours en groupe à Mr Bricolage : 5€/heure
                            </Typography>
								<Typography style={{ marginLeft: '8px' }}>
									Cours particulier : 10€/heure
                            </Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Cours;
