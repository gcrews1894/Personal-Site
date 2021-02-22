import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Catalyst from "/client/Assets/Catalyst.jpg";
import Libraryn from "/client/Assets/Libraryn.jpg";
import WobbeUp from "/client/Assets/WobbeUp.jpg";
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 350,
      height: 425,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

export default function Nav () {

    const classes = useStyles();
    const images = [Catalyst, Libraryn, WobbeUp]
    const projectTitles = ["Catalyst", "Libraryn", "WobbeUp"]
    const projectDescriptions = [
        "Create React unit tests quickly and easily, without writing a single line of code. Built with Electron, React, and Redux",
        "Manage your personal library with just a few clicks. Built with React, Express, and a PostgreSQL database",
        "Craiglist but with even more anonymity. Built with React, Express, and a MongoDB NoSQL database"
    ]
    const catalystLink = "https://github.com/oslabs-beta/Catalyst"
    const librarynLink = "https://github.com/gcrews1894/Libraryn"
    const wobbeLink = "https://github.com/Wobbegongers/WobbeUp"
    const links = [catalystLink, librarynLink, wobbeLink]

    const projectHeaders = projectTitles.map((el) => {
        return <CardHeader title={el} />
    })

    const cardPhotos = images.map(photo => {
        return <CardMedia className={classes.media} image={photo} />
    })

    const projectDes = projectDescriptions.map((el) => {
        return (<CardContent className="cardContent">
            <Typography variant="body2" color="textSecondary" component="p">
                {el}
            </Typography>
        </CardContent>)
    })

    const cardLinks = links.map(el => {
        return (
        <div className="buttonDiv">
            <Button className="primaryButton" variant="contained" color="primary">
                <a href={el} target="_blank">View Repo</a>
            </Button>
        </div>
        )
    })

    const Cards = []
    for (let i = 0; i < projectTitles.length; i++) {
        Cards[i] = (
            <Card className={classes.root} id="cardStyle" key={i}>
                {projectHeaders[i]}
                {cardPhotos[i]}
                {projectDes[i]}
                {cardLinks[i]}
            </Card>
        )
    }

    return (
        <div className="cards">
            {Cards}
        </div>
    )
}