import React , {useState} from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"; 
import Grid from '@material-ui/core/Grid'; 
const useStyles = makeStyles((theme) => ({
  labelInput: {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left",
    color: "rgba(70, 78, 95, 1)",
    marginBottom : '10px'
  },
  styleInput: {
    borderRadius: "4px",
    border : 0,
    background: "rgba(243, 246, 249, 1)",
    height: "36px",
    width: "241px",
    padding: "10px",
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

function TiersSection() {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(0);
  const TiersData =[
    {nom :"Foulen Ben Foulen" , type :  "assurée" , code :"TR65758" , adresse:"Tunis, Tunis" , tel :"+216 24 900 000" , email :"test.email@gmail.com" },
    {nom :"Foulen Ben Foulen 2" , type :  "assurée" , code :"TR65759" , adresse:"Tunis, Tunis" , tel :"+216 24 800 000" , email :"test.email@gmail.com" },
    {nom :"Foulen Ben Foulen 3" , type :  "assurée" , code :"TR65760" , adresse:"Tunis, Tunis" , tel :"+216 24 700 000" , email :"test.email@gmail.com" },
  ]
 
  return (
    <div style={{ padding: "40px" }}>
      <Accordion defaultIndex={[0]}     >
      {
        TiersData.map((tiers, index) => (
          
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
                      {tiers.nom}
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
                          <div className={classes.labelInput}>Code</div>
                          <input className={classes.styleInput} type='text' name="code" value={tiers.code} /> 
                        </Grid>
                        <Grid item  > 
                          <div className={classes.labelInput}>Nom et prénom</div>
                          <input className={classes.styleInput} type='text' name="nom" value={tiers.nom}/>
                        </Grid>
                        <Grid item  > 
                          <div className={classes.labelInput}>Adresse</div>
                          <input className={classes.styleInput} type='text' name="adresse" value ={tiers.adresse} />
                        </Grid>
                        <Grid item  > 
                          <div className={classes.labelInput}>Tél</div>
                          <input className={classes.styleInput} type="tel"  name="phone"  value ={tiers.tel}/>
                        </Grid>
                        
                </Grid>
                <Grid container  spacing={6}>
                        <Grid item  > 
                          <div className={classes.labelInput}>Email</div>
                          <input className={classes.styleInput} type='email' name="email" value ={tiers.email}/>
                        </Grid>
                </Grid>
                  
                </AccordionPanel>
              </AccordionItem>
         
        ))
      }
       </Accordion>
       
    </div>
  )

}

export default TiersSection;