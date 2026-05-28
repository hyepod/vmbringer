import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


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
	coursePaper: {
		padding: theme.spacing(5, 6),
		borderRadius: '2px',
		boxShadow: '0 12px 34px rgba(0, 0, 0, 0.08)',
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(3, 2.5),
		},
	},
	courseHeader: {
		marginBottom: theme.spacing(4),
		textAlign: 'center',
	},
	courseSubtitle: {
		color: '#2b2526',
		fontWeight: 500,
		marginBottom: theme.spacing(1.5),
	},
	courseLine: {
		width: '64px',
		height: '2px',
		margin: `${theme.spacing(2)}px auto ${theme.spacing(3)}px`,
		backgroundColor: '#940028',
	},
	courseIntro: {
		color: '#5f5557',
		fontSize: '1.05rem',
		lineHeight: 1.8,
		margin: '0 auto',
		maxWidth: '760px',
	},
	courseText: {
		color: '#3f383a',
		lineHeight: 1.8,
		marginBottom: theme.spacing(2),
	},
	panelTitle: {
		color: '#940028',
		fontWeight: 600,
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(1.5),
	},
	courseList: {
		color: '#3f383a',
		listStyle: 'disc',
		margin: theme.spacing(0, 0, 3),
		paddingLeft: theme.spacing(3),
	},
	courseListItem: {
		lineHeight: 1.7,
		marginBottom: theme.spacing(1),
	},
	contactBlock: {
		marginTop: theme.spacing(3),
		textAlign: 'center',
	},
	contactButton: {
		marginTop: theme.spacing(1),
		backgroundColor: '#940028',
		color: 'white',
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		'&:hover': {
			backgroundColor: '#73001f',
		},
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
				<Grid item xs={12} sm={10} md={8} className={classes.information}>
					<Paper elevation={3} className={classes.coursePaper}>
						<Grid container direction="column">
							<Grid item className={classes.courseHeader}>
								<Typography variant="h5" component="h2" align="center" className={classes.courseSubtitle}>
									Cours avancés de peinture à l'huile en Aveyron
								</Typography>
								<div className={classes.courseLine} />
								<Typography align="center" className={classes.courseIntro}>
									Véronique Mariotte Bringer transmet une pratique exigeante de la peinture à l'huile, centrée sur la lumière, la matière et la construction progressive d'une image.
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" align="justify" className={classes.courseText}>
									À Millau et en Aveyron, ces cours s'adressent aux personnes qui souhaitent approfondir leur pratique de la peinture à l'huile. L'enseignement s'appuie sur une expérience personnelle exigeante, nourrie par le travail de la lumière, du clair-obscur et des techniques traditionnelles inspirées des maîtres flamands.
								</Typography>
								<Typography variant="body1" align="justify" className={classes.courseText}>
									Chaque séance permet d'avancer avec méthode : observation du sujet, construction de la composition, choix des valeurs, préparation des couleurs, travail des glacis, précision du geste et mise en place d'une lumière juste.
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h6" component="h3" className={classes.panelTitle}>
									Au programme
								</Typography>
								<ul className={classes.courseList}>
									<li className={classes.courseListItem}>Approfondir la technique de la peinture à l'huile et gagner en maîtrise.</li>
									<li className={classes.courseListItem}>Recevoir des conseils personnalisés sur la lumière, les matières, les couleurs et la composition.</li>
									<li className={classes.courseListItem}>Être accompagné sur des sujets variés : nature morte, paysage, portrait ou abstraction.</li>
									<li className={classes.courseListItem}>Développer une peinture plus personnelle, plus construite et plus expressive.</li>
								</ul>
							</Grid>
							<Grid item className={classes.contactBlock}>
								<Typography variant="body1" align="justify" className={classes.courseText}>
									Les cours s'adressent principalement aux peintres ayant déjà des bases et désirant aller plus loin dans leur technique. Pour connaître les disponibilités, les modalités des séances ou organiser un premier échange, vous pouvez contacter directement l'artiste.
								</Typography>
								<Button component={RouterLink} to="/contact" variant="contained" className={classes.contactButton}>
									Prendre contact
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Cours;
