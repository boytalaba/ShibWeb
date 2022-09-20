import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
import videoSrc from 'assets/images/Home/video.mp4'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const HomeSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.homeSectionArea}>
      <Box className={classes.videoPlayer}>
        <video width="100%" height="auto" loop muted autoPlay>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Box>
      <Box className={classes.homeContainer}>
        <Box className={classes.container}>
          {/* <Box className={classes.homeImage}> */}
          <Box className={classes.content}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.title}>What is MOONSHIBS?</Typography>
              <Typography className={globalClasses.text21}>
                Moonshibs is a collection of 10,000 unique NFTs living in Ryoshi's NFT galaxy (on the Shibchain
                blockchain). What makes this project different than any other NFT project is that they are very unique and made details by details.
                Of the 10,000 Moonshibs, there are different species (colors) of shiba and different layers
                and the total possible combinations is greater than any previous generative NFT project to date. This
                has been a colossal undertaking but we wanted to make something truly different than anything anyone has
                seen before as the FIRST NFT COLLECTION on shibchain.
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSection
