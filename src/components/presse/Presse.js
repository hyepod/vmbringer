import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const events = [
	{
		date: 'Juillet 2012',
		title: 'Exposition à Millau à la salle Georges-Costantini',
		link: {
			label: 'Salle Georges-Costantini',
			href: 'http://www.millau.fr/que-faire-a-millau/culture/salles-dexposition-municipales/',
			external: true,
		},
	},
	{
		date: 'Année 2012 - 2013',
		title: 'Exposition au Salon de thé Balke',
	},
	{
		date: 'Printemps 2014',
		title: '58e Salon international des Beaux-Arts de Béziers, Hérault',
		link: {
			label: 'Voir le salon',
			href: 'http://beaux-arts-beziers.com/salon-international-2014/',
			external: true,
		},
	},
	{
		date: 'Juillet - Août 2014',
		title: 'Exposition à ciel ouvert à Pézenas, Hérault',
		link: {
			label: 'Interview pour le Midi Libre',
			href: 'https://www.midilibre.fr/2014/07/24/exposition-de-plein-air-avec-veronique-mariotte-bringer,1029351.php',
			external: true,
		},
	},
	{
		date: 'Printemps 2015',
		title: 'Exposition "Fête du printemps" à Alignan-du-Vent, Hérault',
	},
	{
		date: 'Juillet 2015',
		title: 'Exposition au restaurant La Toile Cirée à Rodez',
	},
	{
		date: 'Automne 2015',
		title: 'Exposition au salon des Arts Plastiques des Fées Pléiades du golf du Cap d\'Agde',
	},
	{
		date: 'Août 2016',
		title: 'Exposition dans l\'église troglodyte de Peyre, Aveyron',
		link: {
			label: 'Essai de Jean-Guy Angles',
			href: '/#/essai',
			external: false,
		},
	},
	{
		date: 'Septembre 2016',
		title: 'SQU\'ARTS 6 organisé par l\'association du Vieux Moulin',
		description: 'Thème de l\'artiste : "Bienvenue en Aveyron".',
		link: {
			label: 'Association du Vieux Moulin',
			href: 'http://www.peintres-et-sculpteurs-millau.com/FR/Association-Peintres-et-Sculpteurs-Millau-accueil.awp',
			external: true,
		},
	},
	{
		date: 'Septembre 2017',
		title: 'SQU\'ARTS 7 organisé par l\'association du Vieux Moulin',
		description: 'Thème de l\'artiste : "Peinture et Poésie".',
		link: {
			label: 'Association du Vieux Moulin',
			href: 'http://www.peintres-et-sculpteurs-millau.com/FR/Association-Peintres-et-Sculpteurs-Millau-accueil.awp',
			external: true,
		},
	},
	{
		date: 'Septembre 2018',
		title: 'SQU\'ARTS 8 organisé par l\'association du Vieux Moulin',
		description: 'Thème de l\'artiste : "La vie".',
		link: {
			label: 'Article dans le Millavois',
			href: 'https://www.millavois.com/2018/08/23/squarts-a-millau-lart-contemporain-sexpose-au-parc-raux/',
			external: true,
		},
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '64px',
		marginBottom: '64px',
		backgroundColor: '#FAFAFA',
	},
	title: {
		marginTop: '34px',
		marginBottom: '24px',
		fontWeight: '500',
	},
	intro: {
		color: '#5f5557',
		lineHeight: 1.8,
		margin: '0 auto',
		maxWidth: '760px',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(2.5),
			paddingRight: theme.spacing(2.5),
		},
	},
	titleLine: {
		width: '72px',
		height: '2px',
		margin: `${theme.spacing(3)}px auto ${theme.spacing(5)}px`,
		backgroundColor: '#940028',
	},
	timeline: {
		maxWidth: '920px',
		padding: theme.spacing(0, 3),
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(0, 2.5),
		},
	},
	event: {
		position: 'relative',
		padding: theme.spacing(0, 0, 3.5, 4),
		borderLeft: '1px solid rgba(148, 0, 40, 0.22)',
		'&:last-child': {
			borderLeftColor: 'transparent',
			paddingBottom: 0,
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			left: '-5px',
			top: '6px',
			width: '9px',
			height: '9px',
			borderRadius: '50%',
			backgroundColor: '#940028',
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(3),
		},
	},
	eventDate: {
		color: '#940028',
		fontSize: '0.9rem',
		fontWeight: 600,
		marginBottom: theme.spacing(0.75),
	},
	eventTitle: {
		color: '#2b2526',
		fontWeight: 500,
		lineHeight: 1.45,
		marginBottom: theme.spacing(0.75),
	},
	eventDescription: {
		color: '#5f5557',
		lineHeight: 1.7,
		marginBottom: theme.spacing(0.75),
	},
	eventLink: {
		color: '#940028',
		fontWeight: 500,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));

export function Presse() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Helmet>
					<title>{"Vmbringer - Exposition & Presse - Peinture - Millau - Aveyron"}</title>
					<meta name="description" content="Exposition et presse de l'artiste Véronique Mariotte Bringer - Peinture - Article -  Millau - Aveyron" />
					<link rel="canonical" href="https://vmbringer.fr/presse" />
				</Helmet>
				<Grid item sm={12}>
					<Typography variant="h2" component="h1" align="center" className={classes.title}><span className='title_span'>EXPOSITIONS & PRESSE</span></Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1" className={classes.intro}>
						Retrouvez une sélection d'expositions, de salons et d'articles consacrés au parcours de Véronique Mariotte Bringer, entre Millau, l'Aveyron et plusieurs rendez-vous artistiques en Occitanie.
					</Typography>
					<div className={classes.titleLine} />
				</Grid>
				<Grid item xs={12} className={classes.timeline}>
					{events.map((event) => (
						<div className={classes.event} key={`${event.date}-${event.title}`}>
							<Typography className={classes.eventDate}>
								{event.date}
							</Typography>
							<Typography variant="h6" component="h2" className={classes.eventTitle}>
								{event.title}
							</Typography>
							{event.description && (
								<Typography variant="body2" className={classes.eventDescription}>
									{event.description}
								</Typography>
							)}
							{event.link && (
								<a
									className={classes.eventLink}
									href={event.link.href}
									rel={event.link.external ? 'noopener noreferrer' : undefined}
									target={event.link.external ? '_blank' : undefined}
								>
									{event.link.label}
								</a>
							)}
						</div>
					))}
				</Grid>
			</Grid>
		</div>
	);
}

export default Presse;
