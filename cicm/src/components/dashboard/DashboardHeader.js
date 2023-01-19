import * as React from "react";
import { Box, Typography } from "@mui/material";

export const DashboardHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ mt: 4, mb: 8, width: "80%", mx: "auto" }}
      alignItems="center"
      gap={5}
    >
      <Typography variant="h4" sx={{ color: "black" }}>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "black" }}>
        Welcome to your dashboard
      </Typography>
    </Box>
  );
};
