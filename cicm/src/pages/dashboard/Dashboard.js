import { Box, Typography } from "@mui/material";
import * as React from "react";

export const Dashboard = ({ dashboard, url }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ mt: 4, mb: 8, width: "90%", mx: "auto" }}
      alignItems="center"
      gap={1}
    >
      <Typography variant="h2" sx={{ color: "black" }}>
        {dashboard} Dashboard
      </Typography>
      <Box
        component="iframe"
        src={url}
        height="600px"
        width="100%"
        sx={{ border: 0 }}
      />
    </Box>
  );
};
