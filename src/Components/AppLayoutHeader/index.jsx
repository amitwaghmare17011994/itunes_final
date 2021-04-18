
import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '@images/logo.png'
import { songsState } from '@atoms/songAtom';
import { useRecoilState } from 'recoil'
import { useStyles } from './styles'
import { getSongs } from '../../Apis/songsApi';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router';
const dummyFavSong = 'do pal'


let timer;
const AppLayoutHeader = () => {
  const classes = useStyles();
  const [songs, setSongs] = useRecoilState(songsState);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory()

  const onSongSearch = (e) => {
    const term = e.target.value
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => searchSong(term || dummyFavSong), 1000)
  }
  const searchSong = async (term) => {
    const songs = await getSongs(term)
    setSongs(songs)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={Logo}  className={classes.logo} />
          </Typography>
          <div style={{ flex: 1 }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={onSongSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
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
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem  >Profile</MenuItem>
              <MenuItem onClick={() => history.push('/')}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>

      </AppBar>
    </div>
  );
}

export default AppLayoutHeader