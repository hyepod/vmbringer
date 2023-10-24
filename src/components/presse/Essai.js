import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';


// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



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

export function Essai() {
	const classes = useStyles();

	return (
		<Grid container className={classes.root} justify='center' alignItems='center'>
			<Helmet>
				<title>{"Vmbringer - Essaie - Peinture - Millau - Aveyron"}</title>
				<meta name="description" content="Essaie l'artiste Véronique Mariotte Bringer - Peinture - Article -  Millau - Aveyron" />
				<link rel="canonical" href="https://vmbringer.fr/essaie" />
			</Helmet>
			<Grid item sm={12}>
				<Typography variant="h2" align="center" className={classes.title}>ESSAIE</Typography>
			</Grid>
			<Grid item xs={11} sm={11} md={8}>
				<Typography variant="h6" align="justify" component='h1' paragraph={true}>Véronique MARIOTTE BRINGER : La maîtrise mais encore ?</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>De l’altération à l’altérité</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>
					Tout un monde dans le globe du grain de raisin – tension perceptible vers Cardin ?<br/>
					La technique du reflet s’épuise à se nourrir d’elle-même ; et à un certain degré de reflet, cesser celui du monde indirect qui l’entoure.<br/>
					L’image virtuelle cède le pas à une belle harmonie de blancs pour un reflet vif ; et de bleu pour évoquer un reflet plus sombre. L’image en trompe-l’œil à laquelle on aurait pu songer, devient alors œuvre peinte, authentiquement réaliste et quitte définitivement le travail d’imitation de la nature, pour exister manifestement comme peinture.<br/>
				</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>
					Du coup je ne me sens pas devant de la peinture fascinée par la photo, mais devant la mise en évidence que le tableau – l’interprétation – serait imperméable au regard – la réalité sans altération-.<br/>
					Car je m’attendais à la performance que le reflet rende compte de l’environnement comme dans les Ménines.<br/>
				</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>
					La surprise suivante est l’émotion ressentie, dont je devine pouvoir prendre sa source dans cette résistance du sujet qui peint à l’objet du motif… Une dramaturgie nait dans l’imaginaire du visiteur attentif : les grains, bulles sanguines, semblent prêts à éclater.<br/>
					Pourrait ici intervenir la notion de motif, la motivation du peintre à poser son geste, c.-à-d. sa geste – au sens épique, en ayant trouvé un équivalent pulsionnel …<br/>
				</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>
					En changeant de format, sur une scène de terrasse, une perte de l’acuité optique s’opère au profit du gauchissement des perspectives – on a ça aussi chez Cézanne et chez les peintres du moyen Âge ; je pense alors : « Elle ose l’interprétation », et cela bien au-delà d’une réminiscence impressionniste. Plutôt du côté du parfum de la petite sensation chère justement à Cézanne. Un parfum qui affleure.<br/>
				</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>
					En sachant plus tard qu’il s’agit dans ce tableau d’un moment d’intimité, je suis convaincu qu’une source profondément propre à le peintre en vient et que celle-ci dépasse de loin la performance technique.<br/>
					Voilà bien un début de réponse à la question : La maîtrise et après ?<br/>
				</Typography>
				<Typography variant="body1" align="justify" paragraph={true}>
					Oui, j’ai été témoin d’une double expression authentique de cette peintre ; que cette expression est en cours de partage, puisque Véronique Mariotte-Bringer nous la donne à voir… Merci<br/>
				</Typography>
				<Typography variant="body1" align="justify">Jean-Guy Angles - 2016</Typography>
			</Grid>
		</Grid>
	);
}

export default Essai;
