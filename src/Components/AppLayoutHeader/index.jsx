import React, { useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "@images/logo.png";
import { songsState, songFilterState } from "@atoms/songAtom";
import { useRecoilState } from "recoil";
import { useStyles } from "./styles";
import { getSongs } from "../../Apis/songsApi";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useHistory } from "react-router";
import Cookies from "js-cookie";

const dummyFavSong = "kk";

let timer;
const AppLayoutHeader = () => {
  const classes = useStyles();
  const [songs, setSongs] = useRecoilState(songsState);
  const [songFilter, setSongFilter] = useRecoilState(songFilterState);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const onSongSearch = (e) => {
    const term = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => searchSong(term || dummyFavSong), 1000);
  };
  const searchSong = async (term) => {
    setSongFilter(term);
    const songs = await getSongs(term);
    setSongs(songs);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // <div className={classes.grow}>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={Logo} className={classes.logo} />
          </Typography>
          <div style={{ flex: 1 }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon
                className={classes.searchIconImg}
                 />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={onSongSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
             >
              <AccountCircle 
                            className={classes.account}

              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>
              <Typography variant="h6">
                Profile
                </Typography>
              </MenuItem>
              
              <MenuItem
                onClick={() => {
                  Cookies.remove("user");
                  window.location.reload()

                }}
              >
                
                <Typography variant="h6">
                Logout
                </Typography>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    // </div>
  );
};

export default AppLayoutHeader;
