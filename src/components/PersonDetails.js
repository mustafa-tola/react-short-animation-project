import React from 'react';
import { useParams,Link } from 'react-router-dom';
import personalities from "../personalities.json";
import { Grid } from "@material-ui/core";
import useWebAnimations, { fadeInLeft,fadeInUp } from "@wellyshen/use-web-animations";

const PersonDetails = () => {
    const { ref } = useWebAnimations({ ...fadeInLeft });
    const { ref:ref1 } = useWebAnimations({ ...fadeInUp,timing: {
        duration: 1000,
        fill: "both"
    } });
    const { person } = useParams();
    const personData = personalities[person];
    if (!personData) {
        return <h1>No Person To Show</h1>
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid ref={ref} item xs={12} sm={6} md={8} style={{ "backgroundColor": "rgba(255,0,0,0.8)" }}>
                    <img src={personData.img} alt={personData.name} width={500} height={500} style={{ "marginTop": "10px", "marginLeft": "25%" }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} style={{"textAlign": "center"}} ref={ref1}>
                    <h1>{personData.name}</h1>
                    <p>{personData.desc}</p>
                    <Link to="/">
                        <button>
                            Back To Home
                        </button>
                    </Link>
                </Grid>
                </Grid>
        </div>
    )
}

export default PersonDetails;