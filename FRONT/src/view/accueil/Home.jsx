import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


const useStyles = makeStyles(() => ({
  img: {
    width: "420px",
    marginTop: "20px",
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    marginTop: "100px",

    backgroundColor: "white",
  },
  button: {
    margin: "20px",
  },
  logo: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  logo1: {
    margin: "10px",
    color: "#CE7B82",
  },
  logo2: {
    margin: "10px",
    color: "#9BC7BA",
  },
  logo3: {
    margin: "10px",
    color: "#9D9F72",
  },
  titre: {
    textDecoration: "none",
    color:"black"
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
  
    <div className={classes.home}>
      <div>
        <img src="./assets/flow.png" alt="" className={classes.img} />
      </div>
      <div className={classes.home}>
        <h2>Développeuse Web Full-Stack</h2>
        <h3>JavaScript | React | Node.JS | Express | MySql | Next | Adobe</h3>
      </div>
      <div className={classes.button}>
        <Link to="/projets" className={classes.titre}>
          <Button variant="outlined" className={classes.titre}>
            Mon portfolio
            <KeyboardArrowRightIcon />
          </Button>
        </Link>
      </div>
      <div className={classes.logo}>
        <a
          href="https://github.com/anaisjarnac"
          target="_blank"
          rel="noreferrer"
          className={classes.logo1}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/anaïs-jarnac-407bba108/"
          target="_blank"
          rel="noreferrer"
          className={classes.logo2}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/anaïs-jarnac-407bba108/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABs7BMcBYAAbaMB-XMhFQVVln5pUlerB_1A,1635458537608)/"
          target="_blank"
          rel="noreferrer"
          className={classes.logo3}
        >
          <AccountCircleIcon />
        </a>
      </div>
    </div>
  );
}

export default Home;
