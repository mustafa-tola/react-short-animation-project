import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import personalities from "../personalities.json";
import useWebAnimations, { zoomIn, fadeInLeft } from "@wellyshen/use-web-animations";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 345,
        width: 345,
    },
});

export default function Home() {
    const classes = useStyles();
    const { ref } = useWebAnimations({ ...fadeInLeft });
    const { ref:ref1 } = useWebAnimations({ ...fadeInLeft });
    const { ref: ref2 } = useWebAnimations({ ...zoomIn });
    const { ref: ref3 } = useWebAnimations({ ...zoomIn });
    const { ref: ref4 } = useWebAnimations({ ...zoomIn });
    const { ref: ref5 } = useWebAnimations({ ...zoomIn });
    const { ref: ref6 } = useWebAnimations({ ...zoomIn });
    const { ref: ref7 } = useWebAnimations({ ...zoomIn });
    const { ref:ref8 } = useWebAnimations({ ...zoomIn });
    const { ref:ref9 } = useWebAnimations({ ...zoomIn });
    const { ref:ref10 } = useWebAnimations({ ...zoomIn });
    
    const refs = [ref2, ref3, ref4, ref5, ref6, ref7,ref8,ref9,ref10];
    return (
        <div>
            <h1 ref={ref} style={{"textAlign": "center"}}>Founders of some famous companies</h1>
            <h1 ref={ref1} style={{ "textAlign": "center" }}>Click on the photos to see the animation and see the details</h1>
            <Grid container spacing={4}>
                {Object.entries(personalities).map((person, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card ref={refs[i]} className={classes.root}>
                                <CardActionArea>
                                    <Link to={`/${person[0]}`}>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image={person[1].img}
                                            title={person[1].name}
                                        />
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    )
}
