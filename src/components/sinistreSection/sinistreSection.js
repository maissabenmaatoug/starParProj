import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TiersSection from './tiersSection.js';
import ExpertisesSection from './expertisesSection.js'; 
import './sinistreSection.css' 
import HistoriqueSection from "./historiqueSection.js";
import PoliceSection from './policeSection.js';
import { makeStyles } from "@material-ui/core/styles"; 
import './sinistreSection.css' 
import VehiculeSection from "./vehiculeSection.js";
import DocSection from "./docSection.js";
  import ImagesTab from "./photoSection.js"; 
const useStyles = makeStyles((theme) => ({
    titer: { fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)' , color :'rgba(63, 66, 84, 0.64)'},
    item :{fontFamily: 'Poppins',fontSize: '12.81px',fontWeight: 500,lineHeight: '19.22px',textAlign: 'left' , color :'rgba(181, 181, 195, 1)' , padding:'3px'},
    paper: {
        width: "100%", 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.06)'
      },
  }));

function CustomTabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div  style={{  width: "100%",   background: 'rgba(255, 255, 255, 1)'  }}>
          {children}
        </div>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 
export default function SinistreSection() {
 
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <>
    <Tabs value={value}  sx={{ marginTop :"40px",   variant:"fullWidth" }} onChange={handleChange}>
          <Tab sx={{ textTransform: 'none'  , height:50  ,fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)' , marginRight : '5px'}}  {...a11yProps(0)} label="Tiers" />
          <Tab sx={{ textTransform: 'none' , height:50  , fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)' , marginRight : '5px'}} {...a11yProps(1)} label="Polices" />
          <Tab sx={{ textTransform: 'none' , height:50  ,   fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)', marginRight : '5px'}} {...a11yProps(2)} label="Véhicules" />
          <Tab sx={{ textTransform: 'none' , height:50   ,fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)', marginRight : '5px'}} {...a11yProps(3)} label="Photos" />
          <Tab sx={{ textTransform: 'none' , height:50   ,fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)', marginRight : '5px'}} {...a11yProps(4)} label="Documents" />
          <Tab sx={{ textTransform: 'none' , height:50   ,fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)', marginRight : '5px'}} {...a11yProps(5)} label="Expertises" />
          <Tab sx={{ textTransform: 'none' , height:50  , fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, lineHeight: '19.5px', textAlign: 'center', background: 'rgba(255, 255, 255, 0.35)'  , color :'rgba(63, 66, 84, 0.64)', marginRight : '5px'}} {...a11yProps(6)} label="Historique" />
      </Tabs>

      <CustomTabPanel  value={value} index={0}>
            <TiersSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
            <PoliceSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
              <VehiculeSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
            <ImagesTab/>
        </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
              <DocSection/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
              < ExpertisesSection />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={6}>
              Item Three
      </CustomTabPanel> */}
      <CustomTabPanel value={value} index={6}>
              <HistoriqueSection/> 
      </CustomTabPanel>
    

       
    </>
           
  )
}