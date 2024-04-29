import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  labelInput: {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left",
    color: "rgba(70, 78, 95, 1)",
    marginBottom: "10px",
  },
  styleInput: {
    borderRadius: "4px",
    border: 0,
    background: "rgba(243, 246, 249, 1)",
    height: "36px",
    width: "241px",
    padding: "14px",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left",
    color: "rgba(70, 78, 95, 1)",
  },
  paper: {
    width: "100%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
  },
}));

function VehiculeSection() {
  const classes = useStyles();
  const VehiculeData = [
    {
      title: " V5698755",
      immatriculation: "142TU6802",
      marque: "25/04/2024",
      modele: "31/03/2024",
      tier: "Riadh Brinis",
    },
    {
      title: " V6597864",
      immatriculation: "142TU6802",
      marque: "25/04/2024",
      modele: "31/03/2024",
      tier: "Riadh Brinis",
    },
    {
      title: " V7841238",
      immatriculation: "142TU6802",
      marque: "25/04/2024",
      modele: "31/03/2024",
      tier: "Riadh Brinis",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ padding: "40px" }}>
    <Accordion defaultIndex={[0]}     >
    {
      VehiculeData.map((tiers, index) => (
        
        <AccordionItem sx={{
          width: "100%",
          marginBottom: "20px",
          borderRadius: "11px",
          border: (openIndex === index)
              ? `1px solid rgba(86, 157, 210, 1)`
              : `1px solid rgba(221, 221, 221, 1)`
      }} >
              <AccordionButton style={{ height: "47px", border: "none", background: "rgba(249, 249, 249, 1)", padding: "10px", borderRadius: "11px" }} onClick={() =>setOpenIndex(index)}>
                <AccordionIcon size="30px" style={{ backgroundColor: "rgba(225, 240, 255, 1)", width: "25px", height: "25px", borderRadius: "5px", color: "rgba(105, 147, 255, 1)" }} />
                <Box as="span"   textAlign='left' marginLeft='20px' style={{ color: "rgba(0, 34, 38, 1)", fontSize: '15px', fontWeight: 500, lineHeight: '21px', fontFamily: 'Poppins', }}>
                    {tiers.title}
                </Box>
              </AccordionButton>
              <AccordionPanel style={{ width: "100%", background: 'rgba(255, 255, 255, 1)', padding: '40px' , borderRadius: "11px" }}>
              <Grid container   style={{justifyContent: 'space-between' , marginBottom :'20px'}}  >
                      <Grid item  > 
                      <div>
                    <div className={classes.labelInput}>Immatriculation</div>
                    <input
                      className={classes.styleInput}
                      type="text"
                      name="immatriculation"
                      value={tiers.immatriculation}
                      disabled
                    />
                  </div>
                      </Grid>
                      <Grid item  > 
                      <div>
                      <div className={classes.labelInput}>Marque</div>
                    <input
                      className={classes.styleInput}
                      type="text"
                      name="marque"
                      value={tiers.marque}
                      disabled
                    />
                  </div>
                      </Grid>
                      <Grid item  > 
                      <div>
                    <div className={classes.labelInput}>Modèle</div>
                    <input
                      className={classes.styleInput}
                      type="text"
                      name="modele"
                      value={tiers.modele}
                      disabled
                    />
                  </div>
                      </Grid>
                      <Grid item  > 
                      <div>
                    <div className={classes.labelInput}>Tier associé</div>
                    <input
                      type="text"
                      style={{
                        borderRadius: "4px",
                        border: 0,
                        background: "rgba(243, 246, 249, 1)",
                        height: "36px",
                        width: "241px",
                        padding: "14px",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "18px",
                        textAlign: "left",
                        color: "#3699FF",
                      }}
                      name="tier"
                      value={tiers.tier}
                      disabled
                    />
                  </div>

                      </Grid>
                      
              </Grid>
           
                
              </AccordionPanel>
            </AccordionItem>
       
      ))
    }
     </Accordion>
     
  </div>
  );
}

export default VehiculeSection;
