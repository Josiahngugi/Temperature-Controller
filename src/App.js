import "./styles.css";
import Counter from "./components/Counter";
import { Grid } from "@mui/material";

export default function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#FEC260" }}
    >
      <Grid item xs={8} sx={{ p: 2 }}>
        <Counter />
      </Grid>
    </Grid>
  );
}
