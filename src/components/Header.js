import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import DiamondIcon from '@mui/icons-material/Diamond'
import Avatar from '@mui/material/Avatar'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <DiamondIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FRONTEND TEST
          </Typography>

          <IconButton sx={{ p: 0 }}>
            <Avatar alt='Walter Arguello' src='' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
