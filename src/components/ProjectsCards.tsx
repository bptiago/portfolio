import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const card = (
  <React.Fragment>
    <CardContent>
      <h1>sadasdsada</h1>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function ProjectCards() {
  return <Card variant="outlined">{card}</Card>;
}
