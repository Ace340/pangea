'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

function Whatsapp() {
  return (
    <>
      <Box
        sx={{
            position: 'fixed',
            bottom: { xs: 100, sm: 100 },  // Adjust bottom position for different screen sizes
            right: { xs: 40, sm: 20 },  // Adjust right position for different screen sizes
            zIndex: 1000,
        }}
        >
        <Fab
            href="https://wa.me/584242864203"
            aria-label="whatsapp"
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }} // WhatsApp green and darker shade on hover
        >
            <WhatsAppIcon />
        </Fab>
       </Box>
    </>
  )
}

export default Whatsapp