import React from 'react'
import { Box, Typography } from '@material-ui/core'
// core components
import Roadmap from 'components/Roadmap/Roadmap'
// images
import roadmap1 from 'assets/images/Home/10.png'
import roadmap2 from 'assets/images/Home/20.png'
import roadmap3 from 'assets/images/Home/30.png'
import roadmap4 from 'assets/images/Home/40.png'
import roadmap5 from 'assets/images/Home/50.png'
import roadmap6 from 'assets/images/Home/60.png'
import roadmap7 from 'assets/images/Home/70.png'
import roadmap8 from 'assets/images/Home/80.png'
import roadmap9 from 'assets/images/Home/80.png'
import roadmap10 from 'assets/images/Home/100.png'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/roadmapSectionStyle'

const useStyles = makeStyles(styles)

const RoadmapSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.buySectionArea}>
      {/* <Box className={classes.container}> */}
      <Box className={classes.content}>
        <Typography className={clsx(classes.roadmapTitle, classes.title)}>ROADMAP</Typography>
      </Box>
      <Box className={classes.roadmapContainer}>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap1} percentage={10} description={'We pay our dads back'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap2}
            percentage={20}
            description={'Some prisoners escape (we giveway 5 rare prisoners)'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap3} percentage={30} description={'Private planetary channels on discord open'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap
            image={roadmap4}
            percentage={40}
            description={'We create the wall of Awesome forever meorializing all the first Astrohoders'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap5} percentage={50} description={'We release the rarity breakdowns'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap image={roadmap6} percentage={60} description={'Astrohedz merch store opens'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap7} percentage={70} description={'An alien comes to Clubhouse'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap image={roadmap8} percentage={80} description={'A spaceship begins to assemble in the Netaverse'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap
            image={roadmap9}
            percentage={90}
            description={'We do that liquidity pool thing (that the BAYC did)'}
          />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap10}
            percentage={100}
            description={'Spaceship opens in the metaverse and our journey begins...'}
          />
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  )
}

export default RoadmapSection
