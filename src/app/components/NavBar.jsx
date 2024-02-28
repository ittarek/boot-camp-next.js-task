"use client";
import React, { useState,useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NavLinks from "./NavLinks";
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthContext from "@/context/AuthContext";
import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";




const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
const { user, loggedOut } = useContext(AuthContext);
const handleLogout = () =>{
  loggedOut()
  .then()
 
}
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 const navData = user?.email ?   afterLoginNavData : beforeLoginNavData;

  return (
    <section>
      {" "}
      <AppBar position="static" className=" bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NewspaperIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pro News
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {navData.map(nav => (
                  <MenuItem key={nav.path} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {" "}
                      <NavLinks href={nav.path}> {nav.title} </NavLinks>
                    </Typography>
                  </MenuItem>
                ))}
                {/* icon */}
                <MenuItem>
                  <Link href="www.facebook.com">
                    {" "}
                    <FaFacebookF />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <FaInstagram />
                </MenuItem>
                <MenuItem>
                  <FaTwitter />
                </MenuItem>
                <MenuItem>
                  <FaTiktok />
                </MenuItem>
                <MenuItem>
                  <FaYoutube />
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* <Button
         
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
              Home
              </Button> */}
              {navData.map(nav => (
                <MenuItem key={nav.path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {" "}
                    <NavLinks href={nav.path}> {nav.title} </NavLinks>
                  </Typography>
                </MenuItem>
              ))}{" "}
              {/* icon */}
              <Link className="my-auto" href="https://www.facebook.com/">
                {" "}
                <FaFacebookF />
              </Link>
              <MenuItem>
                <Link className="my-auto" href="">
                  {" "}
                  <FaInstagram />
                </Link>
              </MenuItem>
              <MenuItem>
                <FaTwitter />
              </MenuItem>
              <MenuItem>
                <FaTiktok />
              </MenuItem>
              <MenuItem>
                <FaYoutube />
              </MenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user?.displayName ? user?.displayName : "user"}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.photoURL} />
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
                <Box onClick={handleCloseUserMenu} className="flex flex-col ">
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <MenuItem>Profile</MenuItem>
                </Box>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};
export default NavBar;
