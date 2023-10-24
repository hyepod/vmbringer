import React from 'react';
import insta from '../../img/insta.jpg'
import './insta.css';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
	root: {
		// flexGrow: 1,
		marginTop: '58px',
		[theme.breakpoints.down('xs')]: {
			marginTop: '40px',
		},
	},
	insta: {
		width: '100%',
		borderRadius: '5%',
		'&:hover': {
			filter: 'brightness(90%)',
		},
	},
	title: {
		[theme.breakpoints.down('xs')]: {
			fontSize: '3em',
			marginBottom: '13px'
		},
	},
	paragraphe: {
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
		},
	},
	buttonInsta: {
		margin: '0',
		padding: '0',
		[theme.breakpoints.down('xs')]: {
			marginTop: '24px',
		},
	},
	container: {
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column-reverse',
		},
	},
}));

export default function Insta() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify="space-evenly" alignItems="center" className={classes.container}>
				<Grid item xs={10} sm={4} md={2}>
					<ButtonBase
						focusRipple
						key="Compte Instagram - VMBringer"
						className={classes.buttonInsta}
					>
						<a href='https://www.instagram.com/v.mariotte_bringer/' target="blank">
							<img src={insta} alt="Compte Instagram - VMBringer" className={classes.insta} />
						</a>
					</ButtonBase>
				</Grid>
				<Grid item xs={11} sm={6} className={classes.paragraphe}>
					<Typography variant="h2" className={classes.title}>
						<span className="title">Instagram</span>
					</Typography>
					<br />
					<Typography>
						Retrouve aussi mes tableaux sur <a className='spring_bounce' href='https://www.instagram.com/v.mariotte_bringer/' target="blank">instagram</a>.
            		</Typography>
					<Typography>
						Tu pourras me dire ce que tu en penses en commentaire !
            		</Typography>
					<Typography>
						Je poste régulièrement de nouveaux tableaux dans tous mes styles de peintures.
            		</Typography>
					<Typography>
						Si tu aimes ce que je fais n'hésite pas à liker.
            		</Typography>
					<Typography>
						Abonne toi pour ne rien rater.
           			</Typography>
				</Grid>
			</Grid>
		</div>
	);
}