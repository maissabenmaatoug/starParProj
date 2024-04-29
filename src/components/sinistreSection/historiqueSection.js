import React   from "react";
import {  Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell"; 
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme) => ({
    tableHeadRows: { height: "43px" ,  background: 'rgba(243, 246, 249, 1)' , borderRadius : '6px'   } ,
    tableCellSmall: { fontFamily : 'Poppins', fontWeight : 400 ,fontSize :15, lineHeight:'22.5px' ,color :'rgba(70, 78, 95, 1)' ,  borderBottom: '1px solid  rgba(0, 0, 0, 0.08)'  },
}));

function HistoriqueSection() {
  const classes = useStyles();
  const historiqueData =[
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
    {action :"Expert automobile affecté" , expert :  "Foulen Ben Foulen" , comment :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam. Proin quis pulvinar massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam quis ornare arcu. Sed in eros dapibus, sagittis ex vel, tempor diam. Morbi convallis ex eget risus egestas lobortis. In." , date:"20/03/2024 08:42"   },
  ]
 
  return (
    <div style={{ padding: "40px" }}> 
    <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size="small"
            >
        <TableRow className={classes.tableHeadRows}>
          
          <TableCell align="left"  style={{ whiteSpace: "nowrap" , fontFamily : 'Poppins', fontWeight : 600 ,fontSize :12, lineHeight:'18px' ,color :'rgba(181, 181, 195, 1)',  border:0  }} >
            Action
          </TableCell>
          <TableCell align="left"  style={{ whiteSpace: "nowrap" , fontFamily : 'Poppins', fontWeight : 600 ,fontSize :12, lineHeight:'18px' ,color :'rgba(181, 181, 195, 1)',  border:0  }} >
          Comment
          </TableCell>
          <TableCell align="right"  style={{ whiteSpace: "nowrap" , fontFamily : 'Poppins', fontWeight : 600 ,fontSize :12, lineHeight:'18px' ,color :'rgba(181, 181, 195, 1)',  border:0 }} >
          Date
          </TableCell>
        </TableRow> 
        <TableBody>
      {
        historiqueData.map((historique, index) => (
            <TableRow 
            hover 
            key={index}
            style={{ height: "48px"   }}>
          
            <TableCell
                align="left"
                width={'50%'}
                className={classes.tableCellSmall}  >
            {historique.action} <a href="#" style={{color :'rgba(73, 105, 180, 1)'}}>{historique.expert}</a>
            </TableCell>
            <TableCell
                align="left"
                width={'30%'}
                className={classes.tableCellSmall}  >
            { historique.comment.substring(0, 30)} ...
            </TableCell>
            <TableCell
                align="right"
                width={'20%'}
                className={classes.tableCellSmall}  >
            {historique.date}
            </TableCell>
          </TableRow> 
            
         
        ))
      }</TableBody>
      </Table>
       </div>
       
    
  )

}

export default HistoriqueSection;