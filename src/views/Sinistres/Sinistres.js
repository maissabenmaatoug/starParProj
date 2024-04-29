import React , {   useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell"; 
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import './Sinistres.css';
const data =[ {
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  },{
    "numero": "S0123456",
    "agence": "Agence A",
    "datesurvenance": "04/01/2024",
    "datedéclaration": "07/01/2024",
    "dateouverture": "07/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123457",
    "agence": "Agence B",
    "datesurvenance": "05/01/2024",
    "datedéclaration": "08/01/2024",
    "dateouverture": "08/01/2024",
    "statut": "Ouverture"
  },
  {
    "numero": "S0123458",
    "agence": "Agence C",
    "datesurvenance": "06/01/2024",
    "datedéclaration": "09/01/2024",
    "dateouverture": "09/01/2024",
    "statut": "Ouverture"
  }, ];

 

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  function getSorting(order, orderBy) {
    return order === "desc"
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  }
function EnhancedTableHead(props) {
    const classes = useStyles();
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    const headRows = [
      {
        id: "numero",
        align: "left", 
        label: "N° Sinsistre",
      },
      
      {
        id: "agence",
        align: "left", 
        label: "Agence",
      },
      {
        id: "datesurvenance",
        align: "left", 
        label: "Date survenance",
      },
  
      {
        id: "datedéclaration",
        align: "left", 
        label: "Date déclaration",
      },
      {
        id: "dateouverture",
        align: "left", 
        label: "Date ouverture",
      },
      {
        id: "statut",
        align: "left", 
        label: "Statut",
      },
    ];
  
    return (
       
        <TableRow className={classes.tableHeadRows}>
          {headRows.map((row) => (
            <TableCell
              key={row.id}
              align={row.align} 
              sortDirection={orderBy === row.id ? order : false}       
              style={{  border:0 }}
            >
              <TableSortLabel
                active={true}
                direction={orderBy === row.id ? order : "desc"}
                onClick={createSortHandler(row.id)}
                style={{ whiteSpace: "nowrap" , fontFamily : 'Poppins', fontWeight : 600 ,fontSize :12, lineHeight:'18px' ,color :'rgba(181, 181, 195, 1)'  }}
              >
                {row.label}
              </TableSortLabel>
            </TableCell>
          ))}
          <TableCell align="left"  style={{border : 0}} >
             {" "}
          </TableCell>
        </TableRow> 
    );
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%", 
    },
    tableCellSmall: { fontFamily : 'Poppins', fontWeight : 600 ,fontSize :14, lineHeight:'21px' ,color :'rgba(70, 78, 95, 1)' ,  borderBottom: '1px solid  rgba(0, 0, 0, 0.08)'  },
 
    paper: {
      width: "100%", 
      borderRadius : '11px', 
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.06)'
    },
 
    tableWrapper: { 
      padding :'40px'
    },
    tableHeadRows: { height: "43px" ,  background: 'rgba(243, 246, 249, 1)' , borderRadius : '6px' } ,
    titre :{ fontFamily: 'Poppins' ,fontSize: '13.8px',fontWeight: 600 , lineHeight: '20.7px' , color :  'rgba(63, 66, 84, 1)'} ,
    titreLabel :{fontFamily: 'Poppins',fontSize: '12px', fontWeight: 500, lineHeight: '18px' ,color :'rgba(32, 18, 70, 1)'  },
    tablePagination:{fontFamily: 'Poppins',fontSize: '12px', fontWeight: 400, lineHeight: '18px' ,color :'rgba(32, 18, 70, 1)'}
  })); 

  EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

export default function Sinistres() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("");
    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === "desc";
        setOrder(isDesc ? "asc" : "desc");
        setOrderBy(property);
      }

     
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(parseInt(event.target.value, 10));
    // };
    
    return (
        <div className={classes.root}>
          
        <Paper className={classes.paper}>
        
          <div className={classes.tableWrapper} style={{ width: "100%" }}>
          <div style={{display:'flex' , alignItems:'center' , marginTop :'20px' , marginBottom :'40px'}}>
              <div className={classes.titre} style={{width : '45%'}}>List des sinistres</div>
                <div  style={{ display:'flex' , alignItems:'center' ,width : '55%' ,  justifyContent:'space-between'}}>
                  <div className={classes.titre}>Filtrer par</div>
                  <div className={classes.titreLabel}>Date de survenance 
                      <input type ='text' style={{border: '0.61px solid rgba(226, 217, 239, 1)' , background :'rgba(255, 255, 255, 1)', 
                                                  width :'149px',height :'30px' , borderRadius :5 , marginLeft :'20px', }}/>
                  </div>
                  <div className={classes.titreLabel}>Agence
                      <select   style={{border: '0.61px solid rgba(226, 217, 239, 1)' , background :'rgba(255, 255, 255, 1)', 
                                                  width :'149px',height :'30px' , borderRadius :5 , marginLeft :'20px'}}></select>
                  </div>
                  <div className={classes.titreLabel}>Status
                      <input type ='text' style={{border: '0.61px solid rgba(226, 217, 239, 1)' , background :'rgba(255, 255, 255, 1)', 
                                                  width :'149px',height :'30px' , borderRadius :5 , marginLeft :'20px'}}/>
                  </div>
                  <button style={{border: '0.96px solid rgba(86, 157, 210, 1)',color: 'rgba(86, 157, 210, 1)', width :'64px' ,height :'27px' ,
                                  fontFamily: 'Poppins', fontSize: '12.76px',  fontWeight: 400, lineHeight: '19.14px', background :'rgba(255, 255, 255, 1)',   }}>Export</button>
                </div>
           </div>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size="small"
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                //rowCount={ }
              />
              <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        //tabIndex={-1}
                        key={row._id}
                        style={{ height: "48px"   }}
                      > 
                        <TableCell
                          align="left"
                          className={classes.tableCellSmall}
                        >
                          <div style={{display: 'flex' ,  }}><div style={{width: '50%'}}>{row.numero} </div>
                              <div style={{width: '40%',height: '26px',borderRadius: '51px',background: 'rgba(225, 240, 255, 1)',textAlign:'center', padding:'5px',
                                  fontFamily: 'Poppins',fontSize: '10.69px', fontWeight: 600, lineHeight: ' 16.03px', color :'rgba(54, 153, 255, 1)' , }}>
                                      Matériel
                              </div>
                          </div> 
                        </TableCell>    
                        <TableCell
                          align="left"
                          className={classes.tableCellSmall}
                        >
                          {row.agence}
                        </TableCell>                 
                        <TableCell
                          align="left"
                          className={classes.tableCellSmall}
                        >
                          {row.datesurvenance}
                        </TableCell>
                        <TableCell
                          align="left"
                          className={classes.tableCellSmall}
                        >
                          {row.datedéclaration}
                        </TableCell>
                        <TableCell
                          align="left"
                          className={classes.tableCellSmall}
                        >
                          {row.dateouverture}
                        </TableCell>
                        <TableCell
                          align="left"
                          className={classes.tableCellSmall}
                        >
                        <div style={{width: '81px',height: '26px',borderRadius: '51px',background: 'rgba(225, 240, 255, 1)',textAlign:'center', padding:'5px',
                            fontFamily: 'Poppins',fontSize: '10.17px', fontWeight: 500, lineHeight: '15.26px', color :'rgba(54, 153, 255, 1)'}}>
                                {row.statut}
                        </div>
                        </TableCell>
                        <TableCell
                          align="right"
                          className={classes.tableCellSmall}
                        >
                          <button style={{width: '61px',height: '34px',borderRadius: '6px', background: 'rgba(215, 249, 239, 1)' , border:0 , 
                                    fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, lineHeight: '18px' ,color: 'rgba(27, 197, 189, 1)'  }}>
                            View
                          </button>
                        </TableCell>
  
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
          <TablePagination
                rowsPerPageOptions={[10, 20]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                  "aria-label": "Previous Page",
                }}
                nextIconButtonProps={{
                  "aria-label": "Next Page",
                }}
                onPageChange={handleChangePage} 
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '18px',
                  color :'rgba(32, 18, 70, 1)'
                }}
                labelRowsPerPage="Lignes par page"
              />
          
        </Paper>
        
          
      </div>
    )
}