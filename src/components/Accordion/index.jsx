import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BloodtypeOutlined } from '@mui/icons-material';
import { Box, useMediaQuery } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'grid',
    gap: '1rem', 

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'light'
  },
}));


function NotificationAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const isAboveMediumScreens = useMediaQuery("(min-width:900px)")
  return (
    <div className={classes.root}>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         >
            <Box display='flex' justifyContent='space-between' gap='30rem'>
          <Typography className={classes.heading}>Dr. Mathias sent you and invitation to a meeting</Typography>

          <Typography  fontSize='0.4rem' fontColor='gray'  color='#84cc6a' width='max-content' padding='0.4rem' borderRadius='0.2rem' style={{
            backgroundColor: '#dcf1d4',
            fontSize: '0.8rem',
            padding: '0.4rem',
            borderRadius: '0.5rem',
            fontWeight: 'lighter',
            color: '#84cc6a',
          }}>
            Mark as Viewed</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Message Goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

export default NotificationAccordion;
