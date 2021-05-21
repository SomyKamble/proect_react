import React from "react";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import classes2 from "./Form.module.css";
import StyledDropzone from "./dragandrop"


import {
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Clock from "react-digital-clock";
import { DropzoneAreaBase } from "material-ui-dropzone";
import ExcelPage from './Upload';
import Layout from '../Layout/Layout';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#141629",
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },

  containerWidth: {
    maxWidth: "1850px",
    marginTop: "10px",
    
  },

  title: {
    flex: "1 1 100%",
  },

  endIcon: {
    marginTop: "30px",
    marginLeft: "560px",
    marginRight:""
    
  },

  textfield: {
    "& > *": {
      //   margin: theme.spacing(1),
      width: "30%",
      //   color:"green",
      marginTop: "40px",
      // borderColor: 'red'
    },
  },

  drop: {
    color: "#bdbbbb",
    backgroundColor: "#141629",
    marginTop: "40px",
  },
}));

const color = "#008000";
const theme = createMuiTheme({
  palette: {
    common: { black: color, white: color },
    primary: {
      main: "#bdbbbb",
      contrastText: "#ffffff",
    },
    text: { primary: color, secondary: color },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${color}`,
        },
      },
    },
  },
});

const themess = createMuiTheme({
  overrides: {
    MuiDropzoneSnackbar: {
      errorAlert: {
        backgroundColor: "#AFA",
        color: "#000",
      },
      successAlert: {
        backgroundColor: "#FAA",
        color: "#000",
      },
    },
  },
});

const themes = createMuiTheme({
  palette: {
      primary: {
          main: "#438c3f",
          contrastText: "#000000",
      },
      secondary: {
          main: "#438c3f",
          contrastText: "#000000",
      },
  },
});

// const buttonTheme = createMuiTheme({
//     palette: {
//       primary: {
//         main: "#bdbbbb",
//         contrastText: "#ffffff",
//       },
//       secondary: {
//         main: "#bdbbbb",
//         contrastText: "#ffffff",
//       },
//     },
//   });

export default function Form() {
  // const [files, setFiles] = useState([]);

  const classes = useStyles();

  const customMe = () => {
    alert("button clicked");
  };

  return (
    <>
  
    <Layout flag="form" />
    <Container className={classes.containerWidth} id="centerstyle">
     
      <div className={classes.root}>
        <Typography
          className={classes.title}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          FILL BELOW FORM
          
        </Typography>
        
        <ThemeProvider theme={theme}>
          {/* <Grid container className={classes.textfield}>
            <Grid item> */}
            
          <form className={classes.textfield} noValidate>
            <TextField
              // className={classe.placeholder}
              label="Enter Dashboard Name"
              variant="standard"
              id="standard-search"
              inputProps={{ style: { fontSize: 13, color: "white" } }}
              InputLabelProps={{ className: classes2.text_field }}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Button 
              variant="outlined"
              color="primary"
              style={{ "min-height": "45px", width: "15%" }}
              classes={{
                endIcon: classes.endIcon,
              }}
            >
              <Clock hour12={false} /> IST
            </Button>
          </form>
    
          {/* </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}> */}
          {/* <Button variant="outlined" color="primary">
                CONTINUE
              </Button> */}
          {/* </Grid>
          </Grid> */}
        </ThemeProvider>
          <StyledDropzone/>
        {/* <DropzoneAreaBase
          dropzoneClass={classes.drop}
          // onAdd={()=>customMe()}
          dropzoneText={"Attach or drop file here"}

          // onChange={(files) => console.log('Files:', files)}
        /> */}

        {/* <ThemeProvider theme={themes}> */}
         <center> <p><ExcelPage/></p> </center>
          {/* <Button
          className={classes.endIcon}
            variant="contained"
            color="primary"
            style={{ "min-height": "40px", width: "20%" }}
          >
            CONTINUE
          </Button> */}
        {/* </ThemeProvider> */}
      
      </div>
    
    </Container>
    
    </>
  );
}
