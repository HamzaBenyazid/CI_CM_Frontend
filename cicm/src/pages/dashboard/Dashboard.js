import { Box } from "@mui/material";
import { DashboardHeader } from "components/dashboard/DashboardHeader";
import * as React from "react";

export const Dashboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ mt: 4, mb: 8, width: "80%", mx: "auto" }}
      alignItems="center"
      gap={5}
    >
      <DashboardHeader />
    </Box>
  );
};
