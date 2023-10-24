import React from 'react';
import tableau1 from '../../img/1.jpg';
import tableau2 from '../../img/2.jpg';
import tableau3 from '../../img/3.jpg';
import tableau4 from '../../img/4.jpg';
import tableau5 from '../../img/5.jpg';
import tableau6 from '../../img/6.jpg';
import tableau7 from '../../img/7.jpg';
import tableau8 from '../../img/8.jpg';
import tableau9 from '../../img/9.jpg';
import tableau10 from '../../img/10.jpg';
import tableau11 from '../../img/11.jpg';

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const squarePainting = [
	{
		id: 1,
		img: tableau1,
		title: "Nature morte à l'écrevisse",
		size: '85x103 cm avec cadre',
		cols: 5,
	},
	{
		id: 2,
		img: tableau2,
		title: "Nature morte et son roquefort",
		size: '46x55 cm',
		cols: 15,
	},
	{
		id: 3,
		img: tableau3,
		title: "Printemps de vigne",
		size: '',
		cols: 10,
	},
	{
		id: 4,
		img: tableau4,
		title: "Coeur de vigne",
		size: '73x100 cm',
		cols: 15,
	},
	{
		id: 5,
		img: tableau7,
		title: "Paysage tranquille",
		size: '',
		cols: 5,
	},
	{
		id: 6,
		img: tableau5,
		title: "Nature morte et pêche",
		size: '73x100 cm',
		cols: 10,
	},
	{
		id: 7,
		img: tableau6,
		title: "Nature morte au drapé bleu",
		size: '',
		cols: 15,
	},
	{
		id: 8,
		img: tableau8,
		title: "Marronnier en fleur",
		size: '72.5x100 cm',
		cols: 10,
	},
	{
		id: 9,
		img: tableau9,
		title: "Coin tranquille",
		size: '100x73 cm',
		cols: 5,
	},
	{
		id: 10,
		img: tableau10,
		title: "Etrange port",
		size: '65x50 cm',
		cols: 5,
	},
	{
		id: 11,
		img: tableau11,
		title: "Seine paisible",
		size: '65x46 cm',
		cols: 5,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		// flexGrow: 1,
		color: "white",
		// bottom:"0",
		// width:"100%",
		marginTop: 'auto',
	},
	text: {
		position: 'absolute',
		top: '50%',
		// left: '50%',
		transform: 'translate(0%, -50%)',
	},
}));

export function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container alignContent="center" alignItems="center" direction="row" justify="center" style={{ position: 'relative' }}>
				<Grid container item direction="column" justify="space-between">
					<GridList cellHeight={80} className={classes.gridList} cols={100} spacing={0} style={{ backgroundColor: 'black' }}>
						{squarePainting.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 1}  >
								<img src={tile.img} alt={tile.title} style={{ opacity: '0.3' }} />
							</GridListTile>
						))}
					</GridList>
				</Grid>
				<Typography className={classes.text} align='center'>
					Vmbringer © 2020 - Réalisé par <a target="_blank" rel="noopener noreferrer" href="https://hippolytebringer.fr" style={{ color: 'white', }} >Bringer Engineering Solutions</a>
				</Typography>
			</Grid>
		</div>
	);
}

export default Footer;