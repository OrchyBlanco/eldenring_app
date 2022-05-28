
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
export default function Element({serverData}:any) {

    const data=serverData.data
    
    return (
      <Container maxWidth="xl">
       <Grid container spacing={{xs:1,md:2}} columns={{xs:2,md:12}}>
         <Grid item>
              <Typography> {data.name}</Typography>
         </Grid>
       </Grid>
      </Container>
    );
  }
  export async function getServerSideProps(context: any) {
    const endpoint = context.query.endpoint;
    const id = context.query.id;
    
    const response = await fetch(
      `https://eldenring.fanapis.com/api/${endpoint}/${id}`
    );
    const serverData = await response.json();
  
    return { props: { serverData } };
  }
  