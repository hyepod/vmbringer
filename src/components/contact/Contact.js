import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Call from '@material-ui/icons/Call';
import Mail from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

const contactItems = [
	{
		label: 'Téléphone',
		value: '06 14 11 83 06',
		href: 'tel:+33614118306',
		icon: Call,
	},
	{
		label: 'Mail',
		value: 'contact@vmbringer.fr',
		href: 'mailto:contact@vmbringer.fr',
		icon: Mail,
	},
	{
		label: 'Instagram',
		value: '@v.mariotte_bringer',
		href: 'https://www.instagram.com/v.mariotte_bringer/',
		icon: InstagramIcon,
		external: true,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '64px',
		marginBottom: '64px',
		backgroundColor: '#FAFAFA',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '64px',
		},
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
		maxWidth: '680px',
		paddingLeft: theme.spacing(2.5),
		paddingRight: theme.spacing(2.5),
		textAlign: 'center',
	},
	titleLine: {
		width: '72px',
		height: '2px',
		margin: `${theme.spacing(3)}px auto ${theme.spacing(5)}px`,
		backgroundColor: '#940028',
	},
	contactList: {
		maxWidth: '760px',
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(2.5),
			paddingRight: theme.spacing(2.5),
		},
	},
	contactItem: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(2.5, 0),
		borderBottom: '1px solid rgba(148, 0, 40, 0.14)',
		'&:last-child': {
			borderBottom: 'none',
		},
		[theme.breakpoints.down('xs')]: {
			alignItems: 'flex-start',
			padding: theme.spacing(2.25, 0),
		},
	},
	iconWrap: {
		alignItems: 'center',
		border: '1px solid rgba(148, 0, 40, 0.18)',
		borderRadius: '50%',
		color: '#940028',
		display: 'flex',
		flex: '0 0 auto',
		height: '44px',
		justifyContent: 'center',
		marginRight: theme.spacing(2.5),
		width: '44px',
		[theme.breakpoints.down('xs')]: {
			height: '40px',
			marginRight: theme.spacing(2),
			width: '40px',
		},
	},
	contactLabel: {
		color: '#5f5557',
		fontSize: '0.9rem',
		marginBottom: theme.spacing(0.5),
	},
	contactLink: {
		color: '#2b2526',
		fontSize: '1.1rem',
		fontWeight: 500,
		textDecoration: 'none',
		wordBreak: 'break-word',
		'&:hover': {
			color: '#940028',
		},
	},
}));

export function Contact() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Helmet>
					<title>{"Vmbringer - Contact - Peinture - Millau - Aveyron"}</title>
					<meta name="description" content="Contact de Véronique Mariotte Bringer : Mail, Téléphone, Instagram - Peinture - Millau - Aveyron" />
					<link rel="canonical" href="https://vmbringer.fr/contact" />
				</Helmet>
				<Grid item sm={12}>
					<Typography variant="h2" component="h1" align="center" className={classes.title}><span className='title_span'>CONTACT</span></Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1" className={classes.intro}>
						Pour une demande d'information, un cours de peinture ou un échange autour d'une oeuvre, vous pouvez contacter directement Véronique Mariotte Bringer.
					</Typography>
					<div className={classes.titleLine} />
				</Grid>
				<Grid item xs={12} className={classes.contactList}>
					{contactItems.map((item) => {
						const Icon = item.icon;

						return (
							<div className={classes.contactItem} key={item.label}>
								<div className={classes.iconWrap}>
									<Icon />
								</div>
								<div>
									<Typography className={classes.contactLabel}>
										{item.label}
									</Typography>
									<a
										className={classes.contactLink}
										href={item.href}
										rel={item.external ? 'noopener noreferrer' : undefined}
										target={item.external ? '_blank' : undefined}
									>
										{item.value}
									</a>
								</div>
							</div>
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
}

export default Contact;
