import * as React from 'react';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './Card'; // Assuming the component is in the same directory

export default function CardRow() {
  return (
    <Grid container spacing={2}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image="/static/images/cards/paella.jpg"
          title="Paella"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like."
          method="Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."
        />
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image="/static/images/cards/other-image.jpg"
          title="Another Dish"
          description="Another description for the second card."
          method="Method for the second dish goes here."
        />
      </Grid>

      {/* Third Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image="/static/images/cards/another-image.jpg"
          title="Another Dish 2"
          description="Another description for the third card."
          method="Method for the third dish goes here."
        />
      </Grid>

      {/* Fourth Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image="/static/images/cards/yet-another-image.jpg"
          title="Yet Another Dish"
          description="Yet another description for the fourth card."
          method="Method for the fourth dish goes here."
        />
      </Grid>
    </Grid>
  );
}
