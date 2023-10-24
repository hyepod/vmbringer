import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import logo from '../../img/logo_avocat.png'
import './style.css';
import { useLocation } from 'react-router-dom';

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	navbar_hide: {
		backgroundColor: `rgba(0, 0, 0, 0.0)`,
		color: 'white !important',
		boxShadow: "none",
	},
	navbar: {
		backgroundColor: 'white',
	},
	navBarButton: {
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			backgroundColor: "white",
			color: "black",
		}
	},
	navBarButton_hide: {
		textDecoration: 'none',
		color: 'white !important',
		'&:hover': {
			textDecoration: 'underline',
			// backgroundColor: "white",
			color: 'white !important',
		}
	},
	main_button_hide: {
		// color: 'white !important',
	},
	main_button: {
		// color: 'black !important',
	},
	is_active: {
		fontWeight: 'bold',
	},
}));

export function Header() {
	const location = useLocation();

	const [onTop, setOnTop] = useState(true);

	useEffect(() => {
		window.onscroll = function () {
			if (window.pageYOffset < 50) {
				setOnTop(true);

			} else {
				setOnTop(false);
			}
		};
	}, []);

	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const isActive = (path) => {
		return path === location.pathname
	}


	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem component={RouterLink} to={`/`} onClick={handleMobileMenuClose}
				className={`${isActive('/') && classes.is_active}`}
			>
				<Typography variant="button" className={`${isActive('/') && classes.is_active}`}>
					L'artiste peintre
          </Typography>
			</MenuItem>
			<MenuItem component={RouterLink} to={`/galerie`} onClick={handleMobileMenuClose}
				className={`${isActive('/galerie') && classes.is_active}`}
			>
				<Typography variant="button" className={`${isActive('/galerie') && classes.is_active}`}>
					Galerie
          </Typography>
			</MenuItem>
			<MenuItem component={RouterLink} to={`/presse`} onClick={handleMobileMenuClose}
				className={`${isActive('/presse') && classes.is_active}`}
			>
				<Typography variant="button" className={`${isActive('/presse') && classes.is_active}`}>
					Expositions & Presse
          </Typography>
			</MenuItem>
			<MenuItem component={RouterLink} to={`/cours`} onClick={handleMobileMenuClose}
				className={`${isActive('/cours') && classes.is_active}`}
			>
				<Typography variant="button" className={`${isActive('/cours') && classes.is_active}`}>
					Cours
          </Typography>
			</MenuItem>
			<MenuItem component={RouterLink} to={`/contact`} onClick={handleMobileMenuClose}
				className={`${isActive('/contact') && classes.is_active}`}
			>
				<Typography variant="button" className={`${isActive('/contact') && classes.is_active}`}>
					Contact
          </Typography>
			</MenuItem>
		</Menu>
	);

	return (
		<div>
			<AppBar position="fixed" className={location.pathname === '/' & onTop ? classes.navbar_hide : classes.navbar}>
				<Toolbar>
					<ButtonBase component={RouterLink} to={`/`} className={location.pathname === '/' & onTop ? "main_button_hide" : "main_button"}>
						<Typography variant="h6" noWrap >
							Vmbringer
              			</Typography>
						{/* <img src={logo} alt="logo avocat" className={classes.logo}/> */}
					</ButtonBase>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Button
							component={RouterLink}
							to={`/`}
							disableRipple
							className={`${location.pathname === '/' & onTop ? classes.navBarButton_hide : classes.navBarButton} ${isActive('/') && classes.is_active}`}
						>
							L'artiste peintre
                		</Button>
						<Button
							component={RouterLink}
							to={`/galerie`}
							disableRipple
							className={`${location.pathname === '/' & onTop ? classes.navBarButton_hide : classes.navBarButton} ${isActive('/galerie') && classes.is_active}`}
						>
							Galerie
                		</Button>
						<Button
							component={RouterLink}
							to={`/presse`}
							disableRipple
							className={`${location.pathname === '/' & onTop ? classes.navBarButton_hide : classes.navBarButton} ${isActive('/presse') && classes.is_active}`}
						>
							Expositions & Presse
                		</Button>
						<Button
							component={RouterLink}
							to={`/cours`}
							disableRipple
							className={`${location.pathname === '/' & onTop ? classes.navBarButton_hide : classes.navBarButton} ${isActive('/cours') && classes.is_active}`}
						>
							Cours
                		</Button>
						<Button
							component={RouterLink}
							to={`/contact`}
							disableRipple
							className={`${location.pathname === '/' & onTop ? classes.navBarButton_hide : classes.navBarButton} ${isActive('/contact') && classes.is_active}`}
						>
							Contact
                		</Button>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							style={{ color: location.pathname === '/' & onTop ? "white" : "black" }}
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}

export default Header;