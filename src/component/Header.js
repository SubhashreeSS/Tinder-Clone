import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='tinder-header'>
      <IconButton className='header-icons' fontSize='large'>
        <PersonIcon fontSize='large' />
      </IconButton>
      <img src='https://brandlogos.net/wp-content/uploads/2021/09/tinder-flame-logo-768x768.png'/>
      <IconButton className='header-icons' fontSize='large'>
        <ForumIcon fontSize='large' />
      </IconButton>
   </div>

  )
}

export default Header