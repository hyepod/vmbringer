import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '64px',
		marginBottom: '48px',
	},
	title: {
		marginTop: '34px',
		marginBottom: '34px',
		fontWeight: '500',
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
				<Grid item xs={12} sm={12} md={8}>
					<List>
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition à Millau à la <a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='http://www.millau.fr/que-faire-a-millau/culture/salles-dexposition-municipales/'>salle Georges-Costantini</a>
									</Typography>
								</React.Fragment>
							} secondary="Juillet 2012" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition au "Salon de thé Balke"
              					</Typography>
								</React.Fragment>
							} secondary="Année 2012 - 2013" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										<a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='http://beaux-arts-beziers.com/salon-international-2014/'>58e salon international des Beaux-Arts de Béziers</a> (Hérault)
              					</Typography>
								</React.Fragment>
							} secondary="Printemps 2014" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition à ciel ouvert à Pézenas (Hérault). <a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='https://www.midilibre.fr/2014/07/24/exposition-de-plein-air-avec-veronique-mariotte-bringer,1029351.php'>Interview pour le MidiLibre</a>
									</Typography>
								</React.Fragment>
							} secondary="Juillet - Août 2014" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition "fête du printemps" à Alignan du Vent (Hérault)
              					</Typography>
								</React.Fragment>
							} secondary="Printemps 2015" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition au restaurant "la toile cirée" à Rodez
              					</Typography>
								</React.Fragment>
							} secondary="Juillet 2015" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition au salon des Arts Plastiques des "Fées pléiades" du golf du cap d'Agde
              					</Typography>
								</React.Fragment>
							} secondary="Automne 2015" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										Exposition dans "l'église troglodyte" de peyre (Aveyron). <a rel="noopener noreferrer" className='spring_bounce' href='/#/essai'>Essai sur l'artiste, de Jean-Guy Angles</a>
									</Typography>
								</React.Fragment>
							} secondary="Août 2016" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										SQU'ARTS 6 organisé par <a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='http://www.peintres-et-sculpteurs-millau.com/FR/Association-Peintres-et-Sculpteurs-Millau-accueil.awp'>l'association du vieux moulin</a>. Thème de l'artiste : "Bienvenue en Aveyron"
              					</Typography>
								</React.Fragment>
							} secondary="Septembre 2016" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										SQU'ARTS 7 organisé par <a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='http://www.peintres-et-sculpteurs-millau.com/FR/Association-Peintres-et-Sculpteurs-Millau-accueil.awp'>l'association du vieux moulin</a>. Thème de l'artiste : "Peinture et Poésie"
              					</Typography>
								</React.Fragment>
							} secondary="Septembre 2017" />
						</ListItem>
						<Divider />
						<ListItem>
							<ListItemText primary={
								<React.Fragment>
									<Typography
										component="span"
										variant="h6"
										className={classes.inline}
										color="textPrimary"
									>
										SQU'ARTS 8 organisé par <a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='http://www.peintres-et-sculpteurs-millau.com/FR/Association-Peintres-et-Sculpteurs-Millau-accueil.awp'>l'association du vieux moulin</a>.
									Thème de l'artiste : "La vie". <a rel="noopener noreferrer" className='spring_bounce' target='_blank' href='https://www.millavois.com/2018/08/23/squarts-a-millau-lart-contemporain-sexpose-au-parc-raux/'>Article dans le Millavois</a>
									</Typography>
								</React.Fragment>
							} secondary="Septembre 2018" />
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</div>
	);
}

export default Presse;
