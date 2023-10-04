import { Grid, GridItem } from "@chakra-ui/react";
import TopBar from "../components/TopBar";

const RootApp = () => {
  return (
    <Grid
      templateAreas={`"header header"
                     "nav main"`}
    >
      <GridItem area={"header"}>
        <TopBar />
      </GridItem>
    </Grid>
  );
};

export default RootApp;
