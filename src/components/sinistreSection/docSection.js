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
import { VscNewFile } from "react-icons/vsc";

    const data =[ {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      },
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      },
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
      {
        "typeDoc": "Fiche de garantie",
        "nom": "FG20353345.pdf",
        "date": "19/12/2023",
    
      }, 
    ];
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
            id: "type",
            align: "left", 
            label: "Type de document",
          },
          
          {
            id: "nom",
            align: "left", 
            label: "Nom",
          },
          {
            id: "date",
            align: "left", 
            label: "Date ",
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
        tableCellSmall: { fontFamily : 'Poppins', fontWeight : 400 ,fontSize :14, lineHeight:'21px' ,color :'rgba(70, 78, 95, 1)' ,  borderBottom: '1px solid  rgba(0, 0, 0, 0.08)'  },
     
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
    
    export default function DocSection() {
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
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
        };
        
        return (
            <div className={classes.root}>

            <Paper className={classes.paper}>
              <div className={classes.tableWrapper} style={{ width: "100%" }}>
              <div  style={{display: "flex", justifyContent: "flex-end",marginRight:"2.5%" ,marginBottom:"1.1%"}}> <VscNewFile size={25} style ={{color:"#4969B4", }} /></div>

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
                              {row.typeDoc}
                            </TableCell>                 
                            <TableCell
                              align="left"
                            //   className={classes.tableCellSmall}
                            style={{ fontFamily : 'Poppins', fontWeight :400 ,fontSize :14, lineHeight:'21px' , color :'#4969B4' ,  borderBottom: '1px solid  rgba(0, 0, 0, 0.08)'  }}
                            >
                              {row.nom}
                            </TableCell>
                            <TableCell
                              align="left"
                            //   className={classes.tableCellSmall}
                            style={{ fontFamily : 'Poppins', fontWeight : 400 ,fontSize :14, lineHeight:'21px' , color :'#4969B4' ,  borderBottom: '1px solid  rgba(0, 0, 0, 0.08)'  }}

                            >
                              {row.date}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableCellSmall}
                            >
                              <button style={{width: '61px',height: '34px',borderRadius: '6px', background: '#D5E5F2' , border:0 , 
                            fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, lineHeight: '18px' ,color :'#4969B4' }}>
                                View
                              </button>
                            </TableCell>
      
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </div>
    
              
            </Paper> 
          </div>
        )
    }
