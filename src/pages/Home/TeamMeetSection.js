import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
// core components
import meetAvatar from 'assets/images/Home/team.png'

import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/teamMeetSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const TeamMeetSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()

  return (
    <Box className={classes.plutexSwapSectionArea}>
      <Box className={classes.gameContainer}>
        <Box className={classes.container}>
          <Box className={classes.content}>
            <Typography className={classes.title}>MEET THE TEAM</Typography>
            <Box className={classes.featureContainer}>
              <Grid
                container
                display="flex"
                alignItems="center"
                justify="center"
                spacing={7}
                style={{ paddingTop: '10px' }}
              >
                <Grid item xs={12} sm={12} md={5} lg={5} style={{ textAlign: 'center' }}>
                  <img src={meetAvatar} className={classes.meetAvatar} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} style={{ alignItems: 'center' }}>
                  <Box>
                    <Typography className={globalClasses.text21}>
                      Astrohedz emerged from the minds of four aliens. The funy thing is that even though they are four
                      aliens, they are from different planets and entirely different timelines in the multiverse. It
                      took a koala (hyper intelligent Earth mammal), a Chiiicra (delicasy made from Torengian foot
                      fungus) and an oversized waffle-iron to create the exact correct sequence of events that would
                      eventually lead to them meeting and creating this project.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TeamMeetSection
