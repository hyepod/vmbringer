import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Call from '@material-ui/icons/Call';
import Mail from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '64px',
		marginBottom: 'auto',
		color: 'white',
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
	icons: {
		color: "#342922",
	},
}));

export function Contact() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' alignItems='center'>
				<Helmet>
					<title>{"Vmbringer - Contact - Peinture - Millau - Aveyron"}</title>
					<meta name="description" content="Contact de Véronique Mariotte Bringer : Mail, Téléphone, Instagram - Peinture - Millau - Aveyron" />
					<link rel="canonical" href="https://vmbringer.fr/contact" />
				</Helmet>
				<Grid item sm={12}>
					<Typography variant="h2" component="h1" align="center" className={classes.title}><span className='title_span'>CONTACT</span></Typography>
				</Grid>
				<Grid item xs={12} sm={6} className={classes.information}>
					<Paper elevation={3}>
						<Grid container direction="column" justify='center' alignItems='center' style={{ paddingTop: '24px', paddingBottom: '24px' }}>
							<Grid item container direction="row" wrap="nowrap" style={{ marginBottom: '12px' }} justify='center' alignItems='center'>
								<Call className={classes.icons} />
								<Typography style={{ marginLeft: '8px' }}>
									Téléphone : 06 14 11 83 06
                            </Typography>
							</Grid>
							<Grid item container direction="row" wrap="nowrap" style={{ marginBottom: '12px' }} justify='center' alignItems='center'>
								<Mail className={classes.icons} />
								<Typography style={{ marginLeft: '8px' }}>
									Mail : contact@vmbringer.fr
                            </Typography>
							</Grid>
							<Grid item container direction="row" wrap="nowrap" justify='center' alignItems='center'>
								<InstagramIcon className={classes.icons} />
								<Typography style={{ marginLeft: '8px' }}>
									Instagram : &nbsp;
								<span style={{
										position: 'relative',
										transform: 'translate(-50%,-50%)',
									}}>
										<a className='spring_bounce' href='https://www.instagram.com/v.mariotte_bringer/' target="blank">
											v.mariotte_bringer
									</a>
									</span>
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Contact;
