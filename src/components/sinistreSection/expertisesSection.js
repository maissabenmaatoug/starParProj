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
  styleInput2: {
    borderRadius: "4px",
    border : 0,
    background: "rgba(243, 246, 249, 1)",
    
    padding: "10px",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left",
    color: "rgba(54, 153, 255, 1)",
  },
  paper: {
    width: "100%",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
  },
  open: {
    border: "1px solid red",
  }
}));

function ExpertisesSection() {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(0);
  const ExpertisesData =[
    {numMission :"M65989899" , typeMission :  "Première expertise" , dateMission :"27/03/2024" , expert:"Lorem Ipsum"   },
    {numMission :"M65989909" , typeMission :  "Deuxième expertise" , dateMission :"26/03/2023" , expert:"Lorem Ipsum"   },
  ]
 
  return (
    <div style={{ padding: "40px" }}>
       <Accordion defaultIndex={[0]}    
              >
      {
        ExpertisesData.map((expertises, index) => (
          
            <AccordionItem sx={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "11px",
                border: (openIndex === index)
                    ? `1px solid rgba(86, 157, 210, 1)`
                    : `1px solid rgba(221, 221, 221, 1)`
            }} >
            <AccordionButton style={{ height: "47px", border: "none", background: "rgba(249, 249, 249, 1)", padding: "10px", borderRadius: "11px"  }} onClick={() =>setOpenIndex(index)}>
              <AccordionIcon size="30px" style={{ backgroundColor: "rgba(225, 240, 255, 1)", width: "25px", height: "25px", borderRadius: "5px", color: "rgba(105, 147, 255, 1)" }} />
              <Box as="span"   textAlign='left' marginLeft='20px' style={{ color: "rgba(0, 34, 38, 1)", fontSize: '15px', fontWeight: 500, lineHeight: '21px', fontFamily: 'Poppins', }}>
                {expertises.numMission}
              </Box>
              <div style={{justifyContent: 'space-between' , display :'flex' , width : '100%'}}>
                <div style={{ marginLeft: '10px',   height: '26px', borderRadius: '51px', background: 'rgba(225, 240, 255, 1)', textAlign: 'center', padding: '5px',
                            fontFamily: 'Poppins', fontSize: '10.69px', fontWeight: 400, lineHeight: ' 16.03px', color: 'rgba(54, 153, 255, 1)',
                          }}>
                            {expertises.typeMission}
                </div>
                <a href="/#"  style={{ textAlign: 'left', padding: '5px', fontFamily: 'Poppins', fontSize: '15px', fontWeight: 500, lineHeight: ' 21px', color: 'rgba(27, 197, 189, 1)',
                            }}>
                            Voir Détail Mission
                </a>
              </div>
            </AccordionButton>
            <AccordionPanel style={{ width: "100%", background: 'rgba(255, 255, 255, 1)', padding: '40px' , borderRadius: "11px" }}>
              <Grid container   style={{justifyContent: 'space-between' , marginBottom :'20px'}}  >
                <Grid item  > 
                  <div className={classes.labelInput}>N° Mission</div>
                  <input className={classes.styleInput} type='text' name="numMission" value={expertises.numMission} /> 
                </Grid>
                <Grid item  > 
                  <div className={classes.labelInput}>Date mission</div>
                  <input className={classes.styleInput} type='Date' name="dateMission" value={expertises.dateMission}/>
                </Grid>
                <Grid item  > 
                  <div className={classes.labelInput}>Expert désigné</div>
                  <div style={{height: "36px", width: "241px",borderRadius: "4px", border : 0,  background: "rgba(243, 246, 249, 1)",}}>
                    <a href="#" style={{padding: "10px", fontFamily: "Poppins", fontSize: "12px", fontWeight: 400, lineHeight: "18px", textAlign: "left", color: "rgba(54, 153, 255, 1)",}}  >
                      {expertises.expert}
                    </a> 
                  </div>
                   
                </Grid>
                <Grid item  > 
                  <div className={classes.labelInput}>Type mission</div>
                  <input className={classes.styleInput} type="text"  name="typeMission"  value ={expertises.typeMission}/>
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

export default ExpertisesSection;