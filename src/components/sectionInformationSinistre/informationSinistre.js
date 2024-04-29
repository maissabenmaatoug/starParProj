import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid'; 
import SectionHeadStatut from '../sectionHeadStatut/sectionHeadStatut';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    borderRadius : '11px', 
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.06)' , 
    
  },
  tableWrapper: {
    padding: "30px", width: "100%" , alignItems: 'center'
  },
  titer: {
  fontFamily: 'Poppins',fontSize: '13.8px',fontWeight: 600,lineHeight: '20.7px' ,textAlign: 'left', color:'rgba(63, 66, 84, 1)', padding:'3px'   }, 
  item :{fontFamily: 'Poppins',fontSize: '12.81px',fontWeight: 500,lineHeight: '19.22px',textAlign: 'left' , color :'rgba(181, 181, 195, 1)' , padding:'3px'}
   
  
   
}));

function InformationSinistre( ) {
  const classes = useStyles();
 const informationSinistre = {numSinistre:4600 , survenance : '202/01/04',ouverture : '202/01/04',declaration : '202/01/04',
                                agence : 'agence',lieux : 'agence',gestion : 'agence' ,garanties:'Vol, Bris de glace, RC ' ,CDL: 'Recours IDA'}
  return ( 
     
     <Paper className={classes.paper}>
           
        <Grid container xs={12} direction="row" justifyContent="space-between"   className={classes.tableWrapper} >
 
            <Grid container  md={8} item style={{   borderRight: "1px solid rgba(0, 0, 0, 0.14)" ,  padding :'5px' }}       >
                    <Grid item  xs={3}   md={2}  >
                        <div className={classes.titer}>N° Sinistre</div>
                        <div className={classes.item} style={{ display: 'flex', alignItems: 'center' }}>
                            {informationSinistre.numSinistre}
                            <div style={{
                                marginLeft: '10px', width: '75px', height: '26px', borderRadius: '51px', background: 'rgba(225, 240, 255, 1)', textAlign: 'center', padding: '5px',
                                fontFamily: 'Poppins', fontSize: '10.69px', fontWeight: 600, lineHeight: ' 16.03px', color: 'rgba(54, 153, 255, 1)',
                            }}>
                                Matériel
                            </div>
                        </div>
                    </Grid>
                    <Grid item  xs={3} md={2 }>
                        <div className={classes.titer}>Date survenance</div>
                        <div className={classes.item}>{informationSinistre.survenance}</div>
                    </Grid>
                    <Grid item xs={3} md={2 }>
                        <div className={classes.titer}>Date ouverture</div>
                        <div className={classes.item}>{informationSinistre.ouverture}</div>
                    </Grid>
                    <Grid item  xs={3} md={2 }>
                        <div className={classes.titer}>Date déclaration</div>
                        <div className={classes.item}>{informationSinistre.declaration}</div>
                    </Grid>
                    <Grid item   xs={3} md={2 }>
                        <div className={classes.titer}>Agence</div>
                        <div className={classes.item}>{informationSinistre.agence}</div>
                    </Grid>
                    <Grid item   xs={3} md={2}>
                        <div className={classes.titer}>Lieux véhicule assurée</div>
                        <div className={classes.item}>{informationSinistre.lieux}</div>
                    </Grid>
                    <Grid item   xs={3} md={2}>
                        <div className={classes.titer}>Mode de gestion</div>
                        <div className={classes.item}>{informationSinistre.gestion}</div>
                    </Grid>
                    <Grid item   xs={3} md={2}>
                        <div className={classes.titer}>Liste des garanties</div>
                        <div className={classes.item}>{informationSinistre.garanties}</div>
                    </Grid>
                    <Grid item   xs={3} md={2}>
                        <div className={classes.titer}>CDL</div>
                        <div className={classes.item}>{informationSinistre.CDL}</div>
                    </Grid>
            </Grid> 
             
            
            
            <Grid   item  md={4} style={{   padding :'5px' }}   > 
                
                <SectionHeadStatut index={3}     />
                                
            </Grid>
        </Grid>
      </Paper> 
  );
}

export default InformationSinistre;