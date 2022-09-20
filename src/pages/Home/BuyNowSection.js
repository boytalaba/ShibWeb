import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
// images
import walletImage from 'assets/images/Home/feature.png'
import gameAvatar1 from 'assets/images/Home/yellow_monster.gif'
import gameAvatar2 from 'assets/images/Home/green_monster.gif'
import gameAvatar3 from 'assets/images/Home/pink_monster.gif'
import gameAvatar4 from 'assets/images/Home/brown_monster.gif'
import featureAvatar from 'assets/images/Home/forrest.png'
import clsx from 'clsx'
import { makeStyles, withStyles, TextField, Button } from '@material-ui/core'
import styles from 'assets/jss/pages/Home/buyNowSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
import toast from 'react-hot-toast'
import { Web3Context } from 'utils/Web3Provider'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)





const WalletButton = withStyles(() => ({
  root: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
    fontWeight: '800',
    borderRadius: '25px',
    padding: '10px 15px',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    width: '130px',
    margin: '20px',
  },
}))(Button)

const BuyButton = withStyles(() => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#4c4c4c',
    },
    fontWeight: '700',
    borderRadius: '25px',
    padding: '10px 15px',
    fontFamily: 'sans-serif',
    // textTransform: 'none',
    width: '130px',
    margin: '20px',
  },
}))(Button)

const BuyNowSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()

  const { connectionStatus, notifyLabel, balance, address, walletInstalledStatus, loadWeb3, nftToken } =
    useContext(Web3Context)
  const [quantity, setQuantity] = useState('')
  const [progressStatus, setProgressStatus] = useState(false)

  const handleClickWallet = async () => {
    if (connectionStatus) {
      toast.success(SUCCSESS_CONNECTED)
    }
    await loadWeb3()
  }

  useEffect(() => {
    if (connectionStatus) {
      toast.success(notifyLabel)
    } else {
      if (notifyLabel !== '') {
        toast.error(notifyLabel)
      }
    }
  }, [notifyLabel])

  useEffect(() => {
    if (!walletInstalledStatus)
      window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en', '_blank')
  }, [walletInstalledStatus])

  const handleClickBuy = () => {
    if (quantity === '') {
      toast.error(INPUT_VALUE)
      return
    } else if (quantity > 30 || quantity < 1) {
      toast.error(MAX_VALUE)
      setQuantity('')
      return
    }
    if (!connectionStatus) {
      toast.error(WRONG_NETWORK)
      return
    }
    toast.success(WAIT_METAMASK)
    setProgressStatus(true)
    nftToken.methods
      .mintAstro(quantity)
      .send({ from: address, value: window.web3.utils.toWei((quantity * ASTRO_PRICE).toString()) })
      .then(data => {
        console.log(data)
        if (data.status) {
          toast.success(SUCCESS_BUY)
          setProgressStatus(false)
          setQuantity('')
        }
      })
  }

  const handleChangeQuantity = event => {
    const reg = /^\d+$/
    if (event.target.value === '' || reg.test(event.target.value)) {
      setQuantity(event.target.value)
    }
  }

  return (
    <>
      <Box className={classes.buyNowSectionArea}>
        <Box className={classes.quantityContainer}>
          <Box className={classes.container}>
            <Grid container display="flex" alignItems="center" justify="center">
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box display="flex" justifyContent="center" mb={5}>
                  <img src={walletImage} className={classes.walletArea} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className={classes.titleBottom}>
                  <Typography className={clsx(classes.title, classes.quantityTitle)}>Get Your MoonShibs!</Typography>
                </Box>
                <Box className={classes.textContentArea}>
                  <Typography className={classes.text31}></Typography>
                </Box>
                <Box className={classes.textContentArea}>
                  <Box className={classes.text31}>
                    <Typography className={classes.text31} gutterBottom>
                      
                    </Typography>
                  </Box>
                 
                </Box>
                <Box className={classes.textContentArea}>
                  
                    
                  
                
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className={classes.detailContainer}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography className={classes.title}>The Details</Typography>
                <Typography className={globalClasses.text21}>
                  All Moonshibs are unique and programmatically generated with over
                  100 possible traits, including fur, clothing, eyes, mouth, headwear, and background. Even though
                  all Moonshibs are out of this world, some are slightly more rare than others.
                  <br />
                  <br /> Moonshibs are stored as ERC-721 tokens on the Shibchain blockchain and hosted on IPFS.
                  Purchasing Moonshibs cost 150000 wShib.
                  <br />
                  <br /> To access members-only areas such as the upcoming updates, Moonshibs will need to join 
                  Telegram and follow our twitter.
                </Typography>
                <Typography variant="h5" className={classes.distribution}>
                  <br />
                  
                </Typography>
                
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box className={classes.galaxyContainer}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
               
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box className={classes.gameContainer}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Typography className={classes.title}>NFTS</Typography>
              <Grid
                container
                display="flex"
                alignItems="center"
                justify="space-around"
                spacing={7}
                style={{ paddingTop: '8px' }}
              >
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar1} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar2} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar3} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                  <img src={gameAvatar4} />
                </Grid>
              </Grid>
              <Box className={classes.featurePosition}>
                <Box className={classes.featureContainer}>
                  <Grid container display="flex" alignItems="center" justify="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                      <img src={featureAvatar} className={classes.featureAvatar} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.gameAvatar}>
                      <Box style={{ position: 'relative' }}>
                        <Box className={classes.featureText}>
                          <Typography className={classes.featureDescription}>
                            The Moonshib NFTS is currently in development. For now, <br />
                            it will stay as A degen art. Upcoming updates soon.
                          </Typography>
                        </Box>
                        <Box className={classes.arrowDirection} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
             
            </Box>
          </Box>
        </Box>
        <Box className={classes.gameBottomContainer}>{/* <img src={gameBottomImg} /> */}</Box>
      </Box>
    </>
  )
}

export default BuyNowSection
