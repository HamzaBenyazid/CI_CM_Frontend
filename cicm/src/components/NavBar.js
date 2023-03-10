import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "res/img/logo.png";
import "@fontsource/inter"; // Defaults to weight 400.
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { isAuthenticated } from "service/authService";
import { goto } from "utils/windowUtils";

const pages = ["Zones", "Plants", "Sensors"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const dashboards = ["Home", "Moisture", "Temperature", "Weather", "NPK"];
const blackColor = "#2A3342";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElDashboard, setAnchorElDashboard] = React.useState(null);

  const handleOpenDashboardMenu = (event) => {
    setAnchorElDashboard(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseDashboardMenu = () => {
    setAnchorElDashboard(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.21)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              ml: 4,
              height: "30px",
            }}
          />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: blackColor }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Box
            component="img"
            src={logo}
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: "30px",
            }}
          />
          <Box
            flexGrow={1}
            justifyContent="flex-end"
            sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}
          >
            <Box display="flex" alignItems="center">
              <Button
                key="Dashboard"
                onClick={handleOpenDashboardMenu}
                sx={{
                  my: 2,
                  color: blackColor,
                  display: "block",
                  textTransform: "none",
                }}
              >
                Dashboard
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElDashboard}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElDashboard)}
                onClose={handleCloseDashboardMenu}
              >
                {dashboards.map((dashboard) => (
                  <MenuItem key={dashboard} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() =>
                        goto("/dashboard/" + dashboard.toLowerCase())
                      }
                    >
                      {dashboard}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: blackColor,
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {isAuthenticated() && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          {!isAuthenticated() && (
            <Button
              sx={{
                flexGrow: 0,
                bgcolor: "primary.main",
                color: "white",
                borderRadius: 36,
                textTransform: "none",
                px: 2,
                "&:hover": {
                  bgcolor: "white",
                  color: "primary.main",
                  borderColor: "primary.main",
                  borderStyle: "solid",
                  borderWidth: "1px",
                },
              }}
            >
              Log in
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
