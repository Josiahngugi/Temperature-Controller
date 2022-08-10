import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Counter(props) {
  const [count, setCount] = useState(10);
  function add() {
    setCount(count + 1);
  }
  function less() {
    setCount(count - 1);
  }
  return (
    <div>
      <Box
        sx={{
          background: count > 10 ? "red" : "green",
          border: 1,
          borderRadius: "100%",
          p: 6,
          mt: 3,
          color: "white"
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {count}
          <Typography variant="overline" sx={{ textAlign: "center" }}>
            oc
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ p: 3, mt: 1 }}>
        <Button
          variant="outlined"
          sx={{ borderRadius: "100%", p: 2, mr: 1, backgroundColor: "#21E1E1", color: "#fff" }}
          onClick={add}
        >
          <AddIcon />
        </Button>

        <Button
          variant="outlined"
          sx={{ borderRadius: "100%", p: 2,  backgroundColor:"#820000",color: "white"}}
          onClick={less}
        >
          <RemoveIcon />
        </Button>
      </Box>
    </div>
  );
}

export default Counter;
