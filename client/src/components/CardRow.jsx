import * as React from 'react';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from './Card'; // Assuming the component is in the same directory
import chatwithdocter from '../images/doctor_1.png'
import doctorondoor from '../images/medicine.png'
import videowithdoctor from '../images/medicine_1.png'
import callondocetor from '../images/hospital.png'

export default function CardRow() {
  return (
    <Grid container spacing={2}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image ={chatwithdocter}
          title="Chat with doctor"
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like."
          method="You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered."
        />
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image={doctorondoor}
          title="Doctor On Door"
          description="Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment"
          method="Method for the second dish goes here."
        />
      </Grid>

      {/* Third Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image={videowithdoctor}
          title="Video Call"
          description="Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment"
          method="Method for the third dish goes here."
        />
      </Grid>

      {/* Fourth Card */}
      <Grid item xs={12} sm={6} md={3}>
        <RecipeReviewCard
          image={callondocetor}
          title="Audio Call"
          description="Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time."
          method="Method for the fourth dish goes here."
        />
      </Grid>
    </Grid>
  );
}
