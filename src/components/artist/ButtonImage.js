import React from 'react';
import cours from '../../img/cours.jpg'
import peinture_6 from '../../img/6.jpg'
import presse from '../../img/presse.jpg'
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		marginTop: '48px',
	},
	image: {
		position: 'relative',
		// margin:'48px',
		height: 300,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
}));

export default function ButtonImage() {
	const classes = useStyles();

	return (
		<div className={classes.root}>

			<ButtonBase
				focusRipple
				key="Galerie"
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{
					width: '33.3%',
				}}
				component={RouterLink}
				to={`/galerie`}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${peinture_6})`,
					}}
				/>
				<span className={classes.imageBackdrop} />
				<span className={classes.imageButton}>
					<Typography
						component="span"
						variant="h4"
						color="inherit"
						className={classes.imageTitle}
					>
						Galerie
              <span className={classes.imageMarked} />
					</Typography>
				</span>
			</ButtonBase>

			<ButtonBase
				focusRipple
				key="Exposition & Presse"
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{
					width: '33.4%',
				}}
				component={RouterLink}
				to={`/presse`}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${presse})`,
					}}
				/>
				<span className={classes.imageBackdrop} />
				<span className={classes.imageButton}>
					<Typography
						component="span"
						variant="h4"
						color="inherit"
						className={classes.imageTitle}
					>
						Exposition & Presse
              <span className={classes.imageMarked} />
					</Typography>
				</span>
			</ButtonBase>

			<ButtonBase
				focusRipple
				key="Cours"
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{
					width: '33.3%',
				}}
				component={RouterLink}
				to={`/cours`}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${cours})`,
					}}
				/>
				<span className={classes.imageBackdrop} />
				<span className={classes.imageButton}>
					<Typography
						component="span"
						variant="h4"
						color="inherit"
						className={classes.imageTitle}
					>
						Cours
              <span className={classes.imageMarked} />
					</Typography>
				</span>
			</ButtonBase>

		</div>
	);
}