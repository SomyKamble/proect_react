import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import classes2 from "./Form.module.css";
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
    fontSize: "20px",
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
    marginTop: "76px",
  },

  lineStyle:{
    "&:hover":{
      borderBottom: '#44947'
    },
  }
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
    MuiInputBase:{
      root:{
        color:'#449474',
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid #449474`,
        },
        "&:hover":{
          borderBottom: `2px solid #449474`,
        }
      },
      placeholder:{
        opacity:'1px', 
      }
    },
    MuiDropzoneArea:{
      root:{
        minHeight:'184px'
      }
    }
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

const UploadButton = withStyles({
  root: {
    boxShadow : 'none',
    textTransform: 'none',
    fontSize: '18',
    borderColor: '#225b54',
    backgroundColor: '#302c3c',
    '&:hover': {
      borderColor: '#225b54',
      backgroundColor: '#302c3c',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: '#225b54',
      backgroundColor: '#302c3c',
    },
    
  }
})(Button);

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
              label="Enter Portfolio name"
              variant="standard"
              id="standard-search"
              inputProps={{ style: { fontSize: 11, color: "#585c67" , marginBottom:'10px',  } }}
              InputLabelProps={{ className: classes2.text_field }}
              className={classes.lineStyle}
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Button
              variant="outlined"
              color="primary"
              style={{ "min-height": "45px", width: "15%" }}
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
       
        <DropzoneAreaBase
          dropzoneClass={classes.drop}
          Icon="disable"
          // onAdd={()=>customMe()}
          // onChange={(files) => console.log('Files:', files)}
          dropzoneText={
            <>
              <UploadButton variant="outlined" style={{marginTop: '3%' ,background: '#302c3c'}}>
                Attach or drop file here
              </UploadButton>
              <Typography variant="body2" style={{marginTop: "2%", color: "#86838B", fontSize: "12px"}}>
                Use the specified format to successfully submit the file.<br/>
                <i> <a
                href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{ color: "#20A45C", textDecoration: "none" }}
              >
                Click here
              </a> </i> to download the sample file.
              </Typography>
            </>
          }
        >
        
        </DropzoneAreaBase>

        {/* <ThemeProvider theme={themes}> */}
          <p><ExcelPage/></p>
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
