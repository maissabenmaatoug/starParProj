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

function PoliceSection() {
  const classes = useStyles();
  const PoliceData = [
    {
      numPolice: "PL545646",
      dateEffet: "25/04/2024",
      dateExpiration: "31/03/2024",
      usage: "------",
      type: "individuelle",
      agence :"agence1",
      listeGar:"vol,Bris de glace",
    },
    {
        numPolice: " PL6987568",
        dateEffet: "25/04/2024",
        dateExpiration: "31/03/2024",
        usage: "------",
        type: "Flotte",
        agence :"agence1",
        listeGar:"vol,Bris de glace",
      },
      {
        numPolice: "PL8795479",
        dateEffet: "25/04/2024",
        dateExpiration: "31/03/2024",
        usage: "------",
        type: "individuelle",
        agence :"agence1",
        listeGar:"vol,Bris de glace",
      },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ padding: "40px" }}>
      <Accordion defaultIndex={[0]}     >
      {
        PoliceData.map((tiers, index) => (
          
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
                      {tiers.numPolice}
                  </Box>
                  <div style={{
                                    marginLeft: '10px',   height: '26px', borderRadius: '51px', background: 'rgba(225, 240, 255, 1)', textAlign: 'center', padding: '5px',
                                    fontFamily: 'Poppins', fontSize: '10.69px', fontWeight: 400, lineHeight: ' 16.03px', color: 'rgba(54, 153, 255, 1)',
                                }}>
                                    {tiers.type}
                                </div>
                </AccordionButton>
                <AccordionPanel style={{ width: "100%", background: 'rgba(255, 255, 255, 1)', padding: '40px' , borderRadius: "11px" }}>
                <Grid container   style={{justifyContent: 'space-between' , marginBottom :'20px'}}  >
                        <Grid item  > 
                        <div>
                <div className={classes.labelInput}>N° Police</div>
                <input className={classes.styleInput} name ="numPolice" type="text" value={tiers.numPolice} disabled/>
              </div>
             
                        </Grid>
                        <Grid item  > 
                        <div>
                <div className={classes.labelInput}>Date effet</div>
                <input className={classes.styleInput} name="dateEffet" value={tiers.dateEffet} disabled/>
              </div>
                        </Grid>
                        <Grid item  > 
                        <div>
                <div className={classes.labelInput}>Date expiration</div>
                <input className={classes.styleInput} name="dateExpiration"  value={tiers.dateExpiration} disabled/>
              </div>
                        </Grid>
                        <Grid item  > 
                        <div>
                        <div className={classes.labelInput}>Usage</div>
                <input className={classes.styleInput} name="usage"  type="text" 
                value={tiers.usage}
                disabled
                />
              </div>
             </Grid>
                        
                </Grid>
                <Grid container style ={{justifyContent: 'start' }} spacing={3}>
            
                        <Grid item  > 
          
                        <div>
                        <div className={classes.labelInput}>Type</div>
                <input className={classes.styleInput}  name="type" type="text" value={tiers.type} disabled/>
              </div>
                        </Grid>
                        <Grid item  style={{ marginLeft: '-0.4rem',}}> 
                        <div >
                <div className={classes.labelInput}>Agence</div>
                <input className={classes.styleInput} name="agence" type="text" value={tiers.agence} disabled/>
              </div>
                        </Grid>
                        <Grid item > 
                        <div   >
                <div className={classes.labelInput}>Liste de garanties</div>
                <input className={classes.styleInput} name="listeGar" type="text" value={tiers.listeGar} disabled/>
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

export default PoliceSection;
