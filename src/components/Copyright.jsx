import React from "react";
import { Typography, Link } from "@mui/material";

function Copyright(props) {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {`Copyright © legi-setiawan `}
        <Link color="inherit" href="https://github.com/legisetiawan">
          github
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

export default Copyright;
