import React from "react";
import {Typography, Box, Link} from "@material-ui/core";

function Footer() {

  const Copyright = ()=>{
    return (
      <Box align="center">
        <Box>
         <Typography variant="body1">
           Copyright ©
           <Link color="inherit" href="#">
             {process.env.REACT_APP_NAME}
           </Link>
           {` ${new Date().getFullYear()}`}
         </Typography>
        </Box>

        <Box fontStyle="italic" my={0.5}>
          <Typography variant="body2">
            From
            <span role="img" aria-label=""> 👨</span> with
            <span role="img" aria-label=""> ❤️</span>
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Copyright />
  );
}

export default Footer;
