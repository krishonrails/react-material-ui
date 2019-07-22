import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText, ListItemLink } from "material-ui/List";
const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

export default ({ exercises }) => (
  <Grid container sm={12}>
    <Grid item sm={6}>
      <Paper style={styles.Paper}>
        {console.log(exercises)}
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {group}
            </Typography>

            <List component="ul" aria-label="Secondary mailbox folders">
              {exercises.map(exercise => (
                <ListItem button>
                  <ListItemText primary={exercise.title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm={6}>
      <Paper style={styles.Paper}>
        <Typography variant="display1">Welcome!</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          Please select an exercise from the left pane
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
