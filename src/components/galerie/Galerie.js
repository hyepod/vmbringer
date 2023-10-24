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
import tableau12 from '../../img/12.png';
import tableau13 from '../../img/13.jpg';
import tableau14 from '../../img/14.jpg';
import tableau15 from '../../img/15.jpg';
import tableau16 from '../../img/16.jpg';
import tableau17 from '../../img/17.jpg';
import tableau18 from '../../img/18.jpg';
import tableau19 from '../../img/19.png';
import tableau20 from '../../img/20.jpg';
import tableau21 from '../../img/21.jpg';
import tableau22 from '../../img/22.png';
import tableau23 from '../../img/23.jpg';
// import tableau24 from '../../img/24.jpg';
import tableau25 from '../../img/25.png';
import tableau26 from '../../img/26.jpg';
import tableau27 from '../../img/27.jpg';
import tableau28 from '../../img/28.jpg';
import './style.css';
import PaintingDialog from './PaintingDialog'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Helmet } from 'react-helmet';

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ButtonBase from '@material-ui/core/ButtonBase';


const squarePainting = [
	{
		id: 1,
		img: tableau1,
		title: "Nature morte à l'écrevisse",
		size: '85x103 cm avec cadre',
		cols: 3,
	},
	{
		id: 2,
		img: tableau2,
		title: "Nature morte et son roquefort",
		size: '46x55 cm',
		cols: 3,
	},
	{
		id: 3,
		img: tableau3,
		title: "Printemps de vigne",
		size: '',
		cols: 3,
	},
	{
		id: 4,
		img: tableau4,
		title: "Coeur de vigne",
		size: '73x100 cm',
		cols: 4.5,
	},
	{
		id: 5,
		img: tableau7,
		title: "Paysage tranquille",
		size: '',
		cols: 4.5,
	},
	{
		id: 6,
		img: tableau5,
		title: "Nature morte et pêche",
		size: '73x100 cm',
		cols: 3,
	},
	{
		id: 7,
		img: tableau6,
		title: "Nature morte au drapé bleu",
		size: '',
		cols: 3,
	},
	{
		id: 8,
		img: tableau8,
		title: "Marronnier en fleur",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 28,
		img: tableau28,
		title: "Le Lévézou",
		size: '',
		cols: 4.5,
	},
	{
		id: 27,
		img: tableau27,
		title: "La capitale en Aveyron",
		size: '',
		cols: 4.5,
	},
	{
		id: 13,
		img: tableau13,
		title: "Vanité",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 14,
		img: tableau14,
		title: "Nant",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 15,
		img: tableau15,
		title: "Transhumance en Aubrac",
		size: '72.5x100 cm',
		cols: 3,
	},
];
const squarePainting2 = [
	{
		id: 16,
		img: tableau16,
		title: "Nectar de vigne",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 19,
		img: tableau19,
		title: "Corbeille de fruits",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 20,
		img: tableau20,
		title: "Raffiné champêtre",
		size: '72.5x100 cm',
		cols: 3,
	},
];
const squarePainting3 = [
	{
		id: 22,
		img: tableau22,
		title: "Panier de fruits",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 25,
		img: tableau25,
		title: "Nature mort au drapé vert",
		size: '72.5x100 cm',
		cols: 3,
	},
	{
		id: 26,
		img: tableau26,
		title: "Rochers",
		size: '72.5x100 cm',
		cols: 3,
	},
];

const longPainting = [
	{
		id: 9,
		img: tableau9,
		title: "Coin tranquille",
		size: '100x73 cm',
		cols: 2.25,
	},
	{
		id: 10,
		img: tableau10,
		title: "Etrange port",
		size: '65x50 cm',
		cols: 2.25,
	},
	{
		id: 11,
		img: tableau11,
		title: "Seine paisible",
		size: '65x46 cm',
		cols: 2.25,
	},
	{
		id: 12,
		img: tableau12,
		title: "Trinquons",
		size: '65x46 cm',
		cols: 2.25,
	},
];
const longPainting2 = [
	{
		id: 17,
		img: tableau17,
		title: "Bouquet de fleurs",
		size: '65x46 cm',
		cols: 2.25,
	},
	{
		id: 18,
		img: tableau18,
		title: "Instantané",
		size: '65x46 cm',
		cols: 2.25,
	},
	{
		id: 21,
		img: tableau21,
		title: "Lilas",
		size: '65x46 cm',
		cols: 2.25,
	},
	{
		id: 23,
		img: tableau23,
		title: "Statue Menhir",
		size: '65x46 cm',
		cols: 2.25,
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		marginTop: '64px',
		backgroundColor: '#FAFAFA',
	},
	gridList: {
		// width: 500,
		// height: 'auto',
		paddingBottom:'10px',
	},
	title: {
		marginTop: '34px',
		marginBottom: '34px',
		fontWeight: '500',
	},
	mobile_version: {
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block',

		},
	},
	large_version: {
		display: 'block',
		[theme.breakpoints.down('xs')]: {
			display: 'none',

		},
	},
	button: {
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: 'black',
		}
	},
	component: {
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			height: 'auto',
		},
	},
	container_component: {
		[theme.breakpoints.down('xs')]: {
			height: 'auto',
		},
	},
}));

export function Galerie() {
	const classes = useStyles();
	// let spacing = 20
	const { width } = useWindowDimensions();

	const [open, setOpen] = React.useState({});

	const handleClickOpen = (id) => {
		setOpen({
			[id]: true
		})
	};

	const handleClose = (id) => {
		setOpen({
			[id]: false
		})
	};

	return (
		<div style={{ marginBottom: '48px', }}>
			<Helmet>
				<title>{"Vmbringer - Galerie - Peinture - Millau - Aveyron - Viaduc"}</title>
				<meta name="description" content="Galerie de peinture de l'artiste Véronique Mariotte Bringer - Peinture - Millau - Aveyron" />
				<link rel="canonical" href="https://vmbringer.fr/galerie" />
			</Helmet>
			<Grid container className={classes.root}>
				<Grid item sm={12}>
					<Typography variant="h2" component="h1" align="center" className={classes.title}><span className='title_span'>GALERIE</span></Typography>
				</Grid>
				<Grid item container sm={11} direction="row" spacing={1} className={classes.mobile_version}>
					{squarePainting.concat(longPainting).concat(squarePainting2).concat(longPainting2).concat(squarePainting3).map((tile) => (
						<Grid item sm={4} key={tile.id} component={ButtonBase} onClick={() => handleClickOpen(tile.id)} disabled={width >= 600 ? false : true}>
							<div className={classes.container_component}>
								<img src={tile.img} alt={tile.title} className={classes.component} align="middle" />
							</div>
							<GridListTileBar
								title={tile.title}
								subtitle={<span>{tile.size}</span>}
								titlePosition='bottom'
							/>
						</Grid>
					))}
				</Grid>
				<Grid item sm={11} className={classes.large_version}>
					<GridList cellHeight={300} className={classes.gridList} cols={9} spacing={20} >
						{squarePainting.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 3} className={classes.button} onClick={() => handleClickOpen(tile.id)} disabled={width >= 600 ? false : true}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>{tile.size}</span>}
									titlePosition='bottom'
								/>
							</GridListTile>
						))}
					</GridList>
					<GridList cellHeight={400} className={classes.gridList} cols={9} spacing={20}>
						{longPainting.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 3} className={classes.button} onClick={() => handleClickOpen(tile.id)} disabled={width >= 600 ? false : true}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>{tile.size}</span>}
									titlePosition='bottom'
								/>
							</GridListTile>
						))}
					</GridList>
					<GridList cellHeight={300} className={classes.gridList} cols={9} spacing={20}>
						{squarePainting2.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 3} className={classes.button} onClick={() => handleClickOpen(tile.id)} disabled={width >= 600 ? false : true}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>{tile.size}</span>}
									titlePosition='bottom'
								/>
							</GridListTile>
						))}
					</GridList>
					<GridList cellHeight={400} className={classes.gridList} cols={9} spacing={20}>
						{longPainting2.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 3} className={classes.button} onClick={() => handleClickOpen(tile.id)} disabled={width >= 600 ? false : true}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>{tile.size}</span>}
									titlePosition='bottom'
								/>
							</GridListTile>
						))}
					</GridList>
					<GridList cellHeight={300} className={classes.gridList} cols={9} spacing={20}>
						{squarePainting3.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 3} className={classes.button} onClick={() => handleClickOpen(tile.id)} disabled={width >= 600 ? false : true}>
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>{tile.size}</span>}
									titlePosition='bottom'
								/>
							</GridListTile>
						))}
					</GridList>
					{squarePainting.concat(squarePainting2).concat(squarePainting3).map((tile) => (
						<PaintingDialog key={tile.id} title={tile.title} size={tile.size} img={tile.img} onClose={() => handleClose(tile.id)} open={open[tile.id] == null ? false : open[tile.id]} />
					))}
					{longPainting.concat(longPainting2).map((tile) => (
						<PaintingDialog key={tile.id} title={tile.title} size={tile.size} img={tile.img} onClose={() => handleClose(tile.id)} open={open[tile.id] == null ? false : open[tile.id]} />
					))}
				</Grid>
				{/* <div className={classes.root}>
					<GridList cellHeight={300} className={classes.gridList} cols={9} spacing={20}>
						{squarePainting.map((tile) => (
							<GridListTile key={tile.id} cols={tile.cols || 3} >
								<img src={tile.img} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>{tile.size}</span>}
									titlePosition='bottom'
								/>
							</GridListTile>
						))}
					</GridList>
				</div> */}
			</Grid>
		</div>
	);
}

export default Galerie;
