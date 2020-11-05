import React from "react";
import styles from "./dashboard.module.css";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  head: {
    textAlign: "center",
    padding: "1%",
    fontSize: "24px",
  },
  media: {
    height: 300,
  },
  rootCard: {
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  main: {
    maxWidth: "100%",
    paddingBottom: "5%"
  },
}));

function Dashboard() {
  const classes = useStyles();

  const items = [
    {
      url:
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/898d3a9d-6c2b-4642-b3d1-78466641efca_1320x376.png",
      mes: "hello",
    },
    {
      url:
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/55d10979-d0de-465b-bf0c-aed1f7c753a7_1320x376.jpg",
      mes: "hi",
    },
    {
      url:
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/11330ca1-f7f7-4bcd-a3ed-8176fd6cd6fa_1320x376.png",
    },
    {
      url:
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/4587d34a-2402-419e-b2cc-47f633f3b535_1320x376.png",
    },
    {
      url:
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/882b5089-f02e-4af7-b93f-ac102bb4a304_1320x376.png",
    },
    {
      url:
        "https://d1z88p83zuviay.cloudfront.net/BannerImages/5a13f3b3-4f7c-4499-994c-ffd7727424f2_1320x376.png",
    },
  ];
  return (
    <>

      <Container className={classes.main}>
        <Box>
          <Carousel>
            {items.map((item, i) => (
              <img
                onClick={() => alert(item.mes)}
                className={styles.banner}
                key={i}
                src={item.url} alt="carousel"
              />
            ))}
          </Carousel>
        </Box>
        <Box className={classes.root}>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={6} lg={4} item >
              <img
                width="100%"
                src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg"
                alt="tea"
              />
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={4} item >
              <img
                width="100%"
                src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png"
                alt="plater"
              />
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={4} item >
              <img
                width="100%"
                src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png"
                alt="food"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography className={classes.head}>SHOP BY CATEGORY</Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <img
                width="95%"
                src="https://www.naturesbasket.co.in/Images/static/exotics.png"
                alt="tea"
              />
              <p>
                {" "}
                <Link to="/" className={styles.link}>Exotic Vegetables</Link>
              </p>
              <span className={styles.afterHead}>
                <p>
                  Asparagus Artichokes
                  <ArrowRightOutlinedIcon classes={{ root: styles.arrow }} />
                </p>
              </span>
              <span className={styles.afterHead}>
                <p>
                  Avocados Peppers
                  <ArrowRightOutlinedIcon classes={{ root: styles.arrow }} />
                </p>
              </span>
              <span className={styles.afterHead}>
                <p>Broccoli Zucchini</p>
              </span>
              <span className={styles.afterHead}>
                <p>
                  <span>View All</span>
                </p>
              </span>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <img
                width="95%"
                src="https://www.naturesbasket.co.in/Images/static/cold-cuts.png"
                alt="tea"
              />
              <p>
                {" "}
                <Link to="/" className={styles.link}>Cold Cut & Seafood</Link>
              </p>

              <span className={styles.afterHead}>
                <p>Chicken Cuts Lollipops Mince</p>
              </span>
              <span className={styles.afterHead}>
                <p>Fish Other Seafood</p>
              </span>
              <span className={styles.afterHead}>
                <p>Fresh Kebabs Others</p>
              </span>
              <span className={styles.afterHead}>
                <p>
                  <span>View All</span>
                </p>
              </span>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <img
                width="95%"
                src="https://www.naturesbasket.co.in/Images/static/Fresh-Artisinal-Breads.png"
                alt="tea"
              />
              <p>
                <Link to="/" className={styles.link}>Fresh Artisanal Breads</Link>
              </p>

              <span className={styles.afterHead}>
                <p>Breadsticks Crostinni Lavache</p>
              </span>
              <span className={styles.afterHead}>
                <p>Buns Croissants Bagels</p>
              </span>
              <span className={styles.afterHead}>
                <p>Muffins Cakes Brownies</p>
              </span>
              <span className={styles.afterHead}>
                <p>
                  <span>View All</span>
                </p>
              </span>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <img
                width="95%"
                src="https://www.naturesbasket.co.in/Images/static/Daily-Essentials.png"
                alt="tea"
              />
              <p>
                <Link to="/" className={styles.link}>Daily Essentials</Link>
              </p>

              <span className={styles.afterHead}>
                <p>Snacks & Beverages </p>
              </span>

              <span className={styles.afterHead}>
                <p>Breakfast, Dairy & Bakery </p>
              </span>

              <span className={styles.afterHead}>
                <p>Staples </p>
              </span>

              <span className={styles.afterHead}>
                <p>
                  <span>View All</span>
                </p>
              </span>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Carousel>
            {items.map((item, i) => (
              <img className={styles.banner} key={i} src={item.url} alt="carousel" />
            ))}
          </Carousel>
        </Box>
        <Box>
          <Typography className={classes.head}>WHAT'S TRENDING</Typography>
        </Box>
        <Box>
          <Typography className={classes.head}>OUR EVENTS</Typography>
        </Box>
        <Box className={styles.event}>
          <Box classes={{ root: styles.imageBoxEvent }}>
            <img
              width="100%"
              src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg" alt="sanjeev kapoor"
            />
          </Box>
          <Box classes={{ root: styles.imageBoxEvent }}>
            <img
              width="100%"
              src="https://www.naturesbasket.co.in/Images/PhotoGallery/IndiaSportsHonours2019NaturesBasketGiftingGallary.jpg" alt="gift"
            />
          </Box>
          <Box classes={{ root: styles.imageBoxEvent }}>
            <img
              width="100%"
              src="https://www.naturesbasket.co.in/Images/PhotoGallery/SaranshGallary.png" alt="people"
            />
          </Box>
        </Box>
        <Box>
          <h3>Online Grocery Store India </h3>
          <p>
            Nature’s Basket is a grocery store operating in Mumbai, Bangalore
            and Pune with deliveries to all cities across India including
            Hyderabad, Delhi, Kolkata, Chennai, Surat and more. We offer a wide
            range of food products for all your everyday needs and even offer
            grocery home delivery as well as a grocery shop online for you to
            purchase from. Our online grocery store has fresh fruits and
            vegetables, fresh and frozen meats and seafood, a wide range of
            breads and other packaged bakery products as well as a range of
            fresh cheeses from around the world. We even have a range of every
            staple and international cuisine product to meet your needs along
            with organic products for fresh and packaged food items. With our
            offerings, we have the best online food shop & online grocery
            shopping platform available for all your grocery products as well as
            physical grocery stores in select cities.{" "}
          </p>
          <h3>Best Online Grocery Supermarket India </h3>
          <p>
            With stores in Mumbai, Pune and Bangalore and online delivery
            services, you can now have all your grocery supermarket shopping
            done online. We have a wide range of grocery products to offer at
            our stores for you to buy groceries from a channel convenient to
            you. Choose from fresh produce to packaged goods, buy groceries
            online and get them delivered straight to your doorstep, thus making
            it a convenient and quick process. You can pay for the shopping
            using credit cards, cash, coupons or online banking facility. We are
            sure to have all the grocery products for your daily dietary needs
            from regular local Indian brands and products to exotic and
            international imported ones.{" "}
          </p>
          <h3>Online Grocery Supermarket Shopping India </h3>
          <p>
            With our wide range of groceries available, Nature’s Basket is a
            large online supermarket and grocery store for all your everyday
            food needs. We offer you the best quality grocery products which you
            can buy online and have them delivered to you conveniently. We have
            our grocery stores in Mumbai, Pune and Bangalore where you can buy
            groceries and food items. We also have the best online grocery store
            to shop for fruits and vegetables, meats and seafood, breads and
            other bakery items as well as cheese and dairy. Order groceries
            online from the best quality grocery store at best prices.{" "}
          </p>
          <small>
            Find a variety of Best Christmas gifts such as delightful Cakes,
            Chocolates, Cookies, Turkey, Stollen, Gourmet Gift Baskets, Sweets &
            Lots More{" "}
            <Link style={{ color: "red", textDecoration: "none" }} to="/">
              Here
            </Link>
          </small>
        </Box>
      </Container>
    </>
  );
}
export default Dashboard;
