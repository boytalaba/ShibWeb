import React from 'react'

// material ui core components
import { Box, Typography, Grid } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Footer/footerStyle'
import discord from 'assets/images/Home/discord.svg'
import instagram from 'assets/images/Home/instagram.svg'
import twitter from 'assets/images/Home/twitter.svg'

const useStyles = makeStyles(styles)

const FooterSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.body}>
      <Box className={classes.container}>
        <Box className={classes.supportContainer}>
          <Grid container display="flex" justify="space-around" spacing={5}>
            <Grid item xs={12} sm={4} md={4} lg={4} className={classes.imageLine}>
              <Box className={classes.supportImage}>
                <Typography className={classes.text}>MINT YOUR MOONSHIB: </Typography>
                <a href="https://moonshibs.ga/">
                  <img src={discord} className={classes.socialAvatar} />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} className={classes.imageLine}>
              <Box className={classes.supportImage}>
                <Typography className={classes.text}>For Updates: </Typography>
                <a href="https://twitter.com/Moonshibs">
                  <img src={twitter} className={classes.socialAvatar} />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} className={classes.imageLine}>
              <Box className={classes.supportImage}>
                <Typography className={classes.text}>Join Community </Typography>
                <a href="https://t.me/MOONSHIBSNFT">
                  <img src={instagram} className={classes.socialAvatar} />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: 40 }}>
          <Typography className={classes.text}>
            Moonshibs, All Right Reserved 2022
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FooterSection
