import {
  Grid,
  Card,
  CardActions,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";

const FaqItem = () => {
  const [expand, setExpand] = useState();

  return (
    <>
      <Paper>
        <Card style={{ textAlign: "center", backgroundColor: "#e6f0f3",color:"#00688b" }}>
          <CardHeader title="Example 1" />
          <CardActions>
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton onClick={() => setExpand(!expand)}>
                <ArrowDropDown />
              </IconButton>
            </Grid>
          </CardActions>
          <Collapse in={expand} sx={{ padding: "20px" }}>
            <Typography>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
              vitae, justo.
            </Typography>
          </Collapse>
        </Card>
      </Paper>
    </>
  );
};
export default FaqItem;
