import React from 'react';

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		// flexGrow: 1,
		color: "white",
		bottom: "0",
		width: "100%",
		marginTop: "48px",
	},
	container:
	{
		background: "",
		[theme.breakpoints.down('sm')]: {
			padding: '0',
		},
	},
	subContainer:
	{
		padding: "48px",
		paddingBottom: '8px',
		paddingTop: '8px',
		background: "#222222",
		[theme.breakpoints.down('sm')]: {
			padding: '0',
			paddingTop: '24px',
		},
	},
	marginMobile: {
		[theme.breakpoints.down('sm')]: {
			marginTop: '24px',
			marginBottom: '24px',
		},
	},
	typoLeftFooterMobile: {
		marginRight: '12px',
		[theme.breakpoints.down('sm')]: {
			margin: '0px',
		},
	},
	typoRightFooterMobile: {
		marginLeft: '12px',
		[theme.breakpoints.down('sm')]: {
			margin: '0px',
		},
	},
	gridFooterMobile: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
}));

export function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container alignContent="center" alignItems="center" direction="row" justify="center" className={classes.container}>
				<Grid container item direction="column" justify="space-between" className={classes.subContainer}>
					<Grid item container direction="row" justify="center" className={classes.marginMobile}>
						<Grid item sm={12} md={6} container justify="flex-end" className={classes.gridFooterMobile}>
							<Typography variant="body2" className={classes.typoLeftFooterMobile} align="center">Vmbringer © 2020</Typography>
						</Grid>
						<Grid item sm={12} md={6} container justify="flex-start" className={classes.gridFooterMobile}>
							<Typography variant="body2" className={classes.typoRightFooterMobile} align="center">Réalisé par <Link target="_blank" href="https://hippolytebringer.fr" style={{ color: '#940028', }} >Bringer Engineering Solutions</Link></Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Footer;