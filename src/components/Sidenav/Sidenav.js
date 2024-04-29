import React, {   useState } from "react";
import { styled  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import {  
  MenuItem,
  MenuList, 
} from "@material-ui/core";
import image from  '../../assets/img/image.png'; 
 
 
// import { Navigate } from 'react-router-dom'; 
// import Applications from '../../views/Applications/Applications';
// import Expert from '../../views/Expert/Expert';
// import Polices from '../../views/Polices/Polices';
import InformationSinistre from '../../components/sectionInformationSinistre/informationSinistre'
import Sinistres from '../../views/Sinistres/Sinistres';
import SinistreSection from '../sinistreSection/sinistreSection';

const drawerWidth = 265;

 

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    background: 'rgba(243, 246, 249, 1)',
    fontFamily:'Poppins'
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1), 
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function Sidenav({ navigat }) {

  const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const data = {
    id: "profile",
    type: "group",
    children: [
        {
            id: "config",
            title: "Configuration",
        },
        {
            id: "logout",
            title: "Se déconnecter",
        },
    ],
  };
  const [ arrayItems , setArrayItems] = useState([
    {text : 'Applications' , 
    icon : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#4A4B68"/>
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#4A4B68"/>
          </svg> ,
    iconChek : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#6993FF"/>
                  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5C13 4.67157 13.6716 4 14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5ZM4 14.5C4 13.6716 4.67157 13 5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5ZM14.5 13C13.6716 13 13 13.6716 13 14.5V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 19.3284 20 18.5V14.5C20 13.6716 19.3284 13 18.5 13H14.5Z" fill="#6993FF"/>
                </svg> ,
    isShaked :false,
    url : '/Applications'},
    {text : 'Expert' ,
    icon : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" x="4" y="4" width="8" height="16" fill="#4A4B68"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H15C15 6 14 5.82843 14 5C14 4.17157 15 4 15 4H20V9C20 9 20 10 19 10C18 10 18 9 18 9V6ZM9 18H6V15C6 15 6 14 5 14C4 14 4 15 4 15V20H9C9 20 10 19.8284 10 19C10 18.1716 9 18 9 18ZM18 15V18H15C15 18 14 18 14 19C14 20 15 20 15 20H20V15C20 15 19.8284 14 19 14C18.1716 14 18 15 18 15ZM6 9V6H9C9 6 10 6 10 5C10 4 9 4 9 4H4V9C4 9 4.17157 10 5 10C5.82843 10 6 9 6 9Z" fill="#4A4B68"/>
            </svg>, 
    iconChek : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" x="4" y="4" width="8" height="16" fill="#6993FF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H15C15 6 14 5.82843 14 5C14 4.17157 15 4 15 4H20V9C20 9 20 10 19 10C18 10 18 9 18 9V6ZM9 18H6V15C6 15 6 14 5 14C4 14 4 15 4 15V20H9C9 20 10 19.8284 10 19C10 18.1716 9 18 9 18ZM18 15V18H15C15 18 14 18 14 19C14 20 15 20 15 20H20V15C20 15 19.8284 14 19 14C18.1716 14 18 15 18 15ZM6 9V6H9C9 6 10 6 10 5C10 4 9 4 9 4H4V9C4 9 4.17157 10 5 10C5.82843 10 6 9 6 9Z" fill="#6993FF"/>
            </svg>, 
    isShaked :false,
    url : '/Expert'},
    {text : 'Polices', 
    icon : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" x="4" y="4" width="8" height="16" fill="#4A4B68"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H15C15 6 14 5.82843 14 5C14 4.17157 15 4 15 4H20V9C20 9 20 10 19 10C18 10 18 9 18 9V6ZM9 18H6V15C6 15 6 14 5 14C4 14 4 15 4 15V20H9C9 20 10 19.8284 10 19C10 18.1716 9 18 9 18ZM18 15V18H15C15 18 14 18 14 19C14 20 15 20 15 20H20V15C20 15 19.8284 14 19 14C18.1716 14 18 15 18 15ZM6 9V6H9C9 6 10 6 10 5C10 4 9 4 9 4H4V9C4 9 4.17157 10 5 10C5.82843 10 6 9 6 9Z" fill="#4A4B68"/>
            </svg>, 
    iconChek : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.3" x="4" y="4" width="8" height="16" fill="#6993FF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H15C15 6 14 5.82843 14 5C14 4.17157 15 4 15 4H20V9C20 9 20 10 19 10C18 10 18 9 18 9V6ZM9 18H6V15C6 15 6 14 5 14C4 14 4 15 4 15V20H9C9 20 10 19.8284 10 19C10 18.1716 9 18 9 18ZM18 15V18H15C15 18 14 18 14 19C14 20 15 20 15 20H20V15C20 15 19.8284 14 19 14C18.1716 14 18 15 18 15ZM6 9V6H9C9 6 10 6 10 5C10 4 9 4 9 4H4V9C4 9 4.17157 10 5 10C5.82843 10 6 9 6 9Z" fill="#6993FF"/>
              </svg>,  
    isShaked :false,
    url : '/Polices'},
    {text : 'Sinistres', 
    icon : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x="4" y="4" width="8" height="16" fill="#4A4B68"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H15C15 6 14 5.82843 14 5C14 4.17157 15 4 15 4H20V9C20 9 20 10 19 10C18 10 18 9 18 9V6ZM9 18H6V15C6 15 6 14 5 14C4 14 4 15 4 15V20H9C9 20 10 19.8284 10 19C10 18.1716 9 18 9 18ZM18 15V18H15C15 18 14 18 14 19C14 20 15 20 15 20H20V15C20 15 19.8284 14 19 14C18.1716 14 18 15 18 15ZM6 9V6H9C9 6 10 6 10 5C10 4 9 4 9 4H4V9C4 9 4.17157 10 5 10C5.82843 10 6 9 6 9Z" fill="#4A4B68"/>
              </svg>, 
    iconChek : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.3" x="4" y="4" width="8" height="16" fill="#6993FF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H15C15 6 14 5.82843 14 5C14 4.17157 15 4 15 4H20V9C20 9 20 10 19 10C18 10 18 9 18 9V6ZM9 18H6V15C6 15 6 14 5 14C4 14 4 15 4 15V20H9C9 20 10 19.8284 10 19C10 18.1716 9 18 9 18ZM18 15V18H15C15 18 14 18 14 19C14 20 15 20 15 20H20V15C20 15 19.8284 14 19 14C18.1716 14 18 15 18 15ZM6 9V6H9C9 6 10 6 10 5C10 4 9 4 9 4H4V9C4 9 4.17157 10 5 10C5.82843 10 6 9 6 9Z" fill="#6993FF"/>
                </svg>, 
    isShaked :false,
    url : '/Sinistres'},
  ]);

  const handleItemClick = (index) => { 
    const array = arrayItems.map((item, idx) => {
      if (idx === index) {
        return { ...item, isShaked: true };
      } else {
        return { ...item, isShaked: false };
      }
    });
    setArrayItems(array) 
  //  handleNavigate(arrayItems[index].url);
  };

  const handleProfileButtonClick = () => {
    setShowMenu(!showMenu);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  position="fixed"
         style={{background :'rgba(255, 255, 255, 1)' , boxShadow:"none"  }} open={open}>
        <Toolbar>
          <IconButton
          disableRipple disableFocusRipple
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) ,  color:"rgba(105, 147, 255, 1)"  ,height : '65px' , '&:hover': {
              backgroundColor: 'transparent',  
            },}}
          >
            <MenuIcon />
          </IconButton>
          <Box style={{display :'flex' , alignItems:'center' , margin: '20px' , position: "absolute",  right: 10,}} > 
            <div  style={{ color: "rgba(136, 140, 159, 1)",
                                    display: "block",fontFamily:"Poppins",
                                    fontSize:11,fontWeight:500 , lineHeight : '16.5px' , marginRight : '10px'}}>
                        Hi ,<span style={{ color: "rgba(0, 0, 0, 1)",fontFamily:"Poppins",fontSize:13,fontWeight:500 , lineHeight : '19.5px'}}> 
                        Sean</span>
            </div>
            <button
                style={{
                    width: "36px",
                    height: "35px",
                    display: "flex",
                    marginLeft: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(215, 249, 239, 1)",
                    borderRadius: 4,
                    border : 0
                }}
                onClick={handleProfileButtonClick}
            >
                <div style={{
                    color: "rgba(11, 183, 131, 1)",
                    fontSize: 17,
                    fontFamily: "Poppins",
                    fontWeight: 400
                }}>
                    S
                </div>
            </button> 
                    {showMenu && (
                        <MenuList
                            style={{
                                position: "absolute", 
                                backgroundColor: "rgba(11, 183, 131, 1)",
                                maxHeight: "400px",
                                overflowY: "auto",
                                right: 6,
                                borderRadius : 5,
                                top: 40
                            }}
                        >
                            {data.children.map((child) => (
                                <MenuItem key={child.id}  style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: 12, 
                                  margin:10,
                              }}> 
                              {child.title}    
                                </MenuItem>
                            ))}
                        </MenuList>
                    )}
          </Box>   
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',border :0
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <img
             style={{width:'170px' , height : '50px' ,flex: 2 ,  }}
            src= {image}
            alt=""
          />
          <IconButton onClick={handleDrawerClose}  disableRipple disableFocusRipple 
           sx={{ height : '65px' , '&:hover': {
            backgroundColor: 'transparent',  
          },}}>
             <ChevronLeftIcon style={{ color: 'rgba(105, 147, 255, 1)'  }} />
             <ChevronLeftIcon style={{ marginLeft :'-20px',color: 'rgba(105, 147, 255, 1)' ,opacity: '30%' }} />
          </IconButton>
        </DrawerHeader> 
        <Box style={{display :'flex' , alignItems:'center' , margin :'40px 20px 20px 20px'  }} >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4688 16.7646C12.0172 17.2038 12.797 17.2035 13.3451 16.764L20.0169 11.4128L20.246 11.2301C20.9977 10.6304 20.9989 9.48824 20.2485 8.88695L13.3451 3.35555C12.797 2.91632 12.0174 2.91632 11.4692 3.35555L4.56144 8.89053C3.81245 9.49068 3.81196 10.6301 4.56044 11.2309L4.78712 11.4128L11.4688 16.7646Z" fill="#4A4B68"/>
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13.3347 19.4702C12.7866 19.9094 12.0072 19.9094 11.459 19.4704L5.52621 14.7185C5.11478 14.389 4.51294 14.4616 4.19168 14.8795C3.87519 15.2913 3.95204 15.8815 4.36341 16.1985L11.4902 21.6902C12.0297 22.106 12.7815 22.106 13.3211 21.6904L20.4445 16.2034C20.8594 15.8838 20.9367 15.2885 20.6172 14.8736C20.2932 14.4529 19.6872 14.3802 19.2729 14.7121L13.3347 19.4702Z" fill="#4A4B68"/>
          </svg>
         <div style={{  fontFamily: 'Poppins'  , fontSize: 12, fontWeight: 400,  lineHeight: '18px', color: 'rgba(136, 140, 159, 1)'  ,marginLeft :'10px'   }}>Dashboard</div> 
        </Box >
        <Box style={{  fontFamily: 'Poppins'  , fontSize: 12, fontWeight: 400,  lineHeight: '18px', color: 'rgba(74, 75, 104, 1)'  , margin :'30px 20px 20px 20px'   }} >CUSTOM</Box >
        {arrayItems.map((item, index) => (
          <Box style={{  height : '44px' , display :'flex' ,alignItems: 'center',  backgroundColor: item.isShaked ?   'rgba(243, 246, 249, 1)' :'rgba(255, 255, 255, 1)' }} onClick={() => handleItemClick(index)} >
              <div style={{marginLeft : '20px'}}> {item.isShaked ? <>{item.iconChek}</> :  <>{item.icon}</>} </div> 
              <Box style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 400, lineHeight: '18px', flex: 2, marginLeft: '10px', color: item.isShaked ?   'rgba(105, 147, 255, 1)' :'rgba(136, 140, 159, 1)'}}>
                {item.text}
              </Box>
              <Box style={{marginRight : '20px'}}><ChevronRightIcon style={{ color: 'rgba(73, 75, 105, 1)' ,  fontSize :16}}/></Box>
          </Box> 
        ))}
         
         
   
         
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Sinistres /> */}
        {/*index du 0 --> 4*/  }
          
          <InformationSinistre />
          <SinistreSection />
        {/* <div  >
          {navigat === "Applications" && <Applications />}
          {navigat === "Expert" && <Expert />}
          {navigat === "Polices" && <Polices />}
          {navigat === "Sinistres" && <Sinistres />}
          
        </div> */}
      
      </Main>
    </Box>
  );
}
