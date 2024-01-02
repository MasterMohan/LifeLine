// Footer.js

import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = styled((theme) => ({
  footer: {
    backgroundColor: "blue",
    color: theme.palette.common.white,
    padding: theme.spacing(4, 0),
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  socialIcon: {
    color: theme.palette.common.white,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Lifeline</Typography>
            <Link href="#" className={classes.link}>
              Find Teacher
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Lessons
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Company</Typography>
            <Link href="#" className={classes.link}>
              About
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Documentation
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">More</Typography>
            <Link href="#" className={classes.link}>
              Learn more than just a language
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Link 1
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Link 2
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Term</Typography>
            <Link href="#" className={classes.link}>
              Link 3
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Link 4
            </Link>
            <br />
            <Link href="#" className={classes.link}>
              Link 5
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="inherit">
              Copyright © 2023 LifeLine.
            </Typography>
          </Grid>
          <Grid item>
            <IconButton href="#" className={classes.socialIcon}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" className={classes.socialIcon}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" className={classes.socialIcon}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" className={classes.socialIcon}>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
