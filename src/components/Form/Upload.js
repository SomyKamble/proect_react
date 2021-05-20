import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import classes2 from "./Login.module.css";
import { Table, Button, Row, Col, Upload } from "antd";
import { DropzoneAreaBase, DropzoneArea } from "material-ui-dropzone";
import { ExcelRenderer } from "react-excel-renderer";
// import { getDroppedOrSelectedFiles } from "html5-file-selector";
import Dropzone from "react-dropzone";
// import DropZone from "./dropzone/DropZone";
import { Link as Links } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import TablePage from "./FormTab";
import cssstyle from "./Form.module.css";
// import TransitionsModal from "./Modal";
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { Table, Button, Row, Col, Upload } from "antd";

class ExcelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: [],
      rows: [],
      files: [],
      errorMessage: null,
      columns: [
        {
          title: "TICKER",
          dataIndex: "name",
          editable: false,
        },
        {
          title: "SHORTNAME",
          dataIndex: "age",
          editable: false,
        },
        {
          title: "STOCKPRICE",
          dataIndex: "gender",
          editable: false,
        },
        {
          title: "QUANTITY",
          dataIndex: "age2",
          editable: false,
        },
      ],
    };
  }

  handleCallback = (childData) => {
    this.setState({ data: childData });
  };

  //   handleSave = (row) => {
  //     const newData = [...this.state.rows];
  //     const index = newData.findIndex((item) => row.key === item.key);
  //     const item = newData[index];
  //     newData.splice(index, 1, {
  //       ...item,
  //       ...row,
  //     });
  //     this.setState({ rows: newData });
  //   };

  // handleChange(files1){
  //   this.setState({
  //     files: files1
  //   });
  //   console.log('file',this.state.files);
  //   let fileObj = this.state.files;
  //   console.log('file',this.state.files.type);
  //   console.log("fileObj.type:", fileObj.type);
  // }

  //   checkFile(file) {
  //     let errorMessage = "";
  //     if (!file || !file[0]) {
  //       return;
  //     }
  //     const isExcel =
  //       file[0].type === "application/vnd.ms-excel" ||
  //       file[0].type ===
  //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  //     if (!isExcel) {
  //       errorMessage = "You can only upload Excel file!";
  //     }
  //     console.log("file", file[0].type);
  //     const isLt2M = file[0].size / 1024 / 1024 < 2;
  //     if (!isLt2M) {
  //       errorMessage = "File must be smaller than 2MB!";
  //     }
  //     console.log("errorMessage", errorMessage);
  //     return errorMessage;
  //   }

  fileHandler = (FileList) => {
    console.log("fileListHere", FileList);
    let fileObj = FileList;
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!",
      });
      return false;
    }
    console.log("fileObj.type:", fileObj.type);
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!",
      });
      return false;
    }

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let newRows = [];
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            if (row[0] && row[3]) {
              newRows.push({
                key: index,
                name: row[0],
                age: row[1],
                gender: row[2],
                age2: row[3],
              });
            }
          }
        });
        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!",
          });
          return false;
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null,
          });
        }
      }
    });
    return false;
  };

  render() {
    const columns = this.state.columns.map((col) => {
      return col;
    });

    const check = (data) => {
      if (data === "YES") {
        return (
          <div style={{ marginTop: 20,width: "50%" }}>
            <Table dataSource={this.state.rows} columns={columns} />
          </div>
        );
      } else {
        return <div></div>;
      }
    };
    const { data } = this.state;

    return (
      <>
        <div>
          <div style={{ marginTop: "25px" }}>
            <Upload
              name="file"
              beforeUpload={this.fileHandler}
              onRemove={() => this.setState({ rows: [] })}
              multiple={false}
              // component={Links} to="/showtable"
            >
              <Button
                //   className={classes.endIcon}
                variant="contained"
                color="primary"
                style={{
                  "min-height": "40px",
                  width: "30%",
                  backgroundColor: "green",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                Attach File here
                {/* <Links to='/showtable'>SUBMIT</Links> */}
              </Button>
              <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <a
                href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{ color: "green" }}
              >
                Sample excel sheet
              </a>
            </Upload>
          </div>

          {/* <div style={{ marginTop: 20 }}>
          <Table className={cssstyle.content} dataSource={this.state.rows} columns={columns} />
        </div>  */}

          {/* <TransitionsModal dataSource={this.state.rows} columns={columns} /> */}
        </div>
        <div>
          <div>
            <TransitionsModal
              rows={this.state.rows}
              cols={columns}
              parentCallback={this.handleCallback}
            />
          </div>
          {/* {this.state.data} */}
        </div>
        {check(this.state.data)}
      </>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        // onClick={() => { func1(); func2();}}
        style={{
          "min-height": "40px",
          width: "30%",
          backgroundColor: "green",
          fontSize: "17px",
          fontWeight: "600",
          marginTop: 20,
        }}
      >
        Submit
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">INFO ABOUT ROWS AND COLS</h2>
            <p id="transition-modal-description">
              This table have {props.rows.length} Rows. Do you want to accept?
            </p>
            <div style={{ marginTop: 20 }}>
              <div className="actions">
                {/* <button
                  onClick={() => {
                    props.parentCallback("YES");
                    handleClose();
                    // close();
                  }}
                  className="button"
                >
                  CREATE Table{" "}
                </button> */}
                <button
                  type="button"
                  onClick={() => {
                    props.parentCallback("YES");
                    handleClose();
                    // close();
                  }}
                  // onClick={() => { func1(); func2();}}
                  style={{
                    "min-height": "40px",
                    width: "50%",
                    backgroundColor: "green",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                >
                  Show Table
                </button>

                <button
                  style={{
                    "min-height": "40px",
                    width: "50%",
                    backgroundColor: "green",
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
                    props.parentCallback("NO");
                    handleClose();
                    // close();
                  }}
                >
                  Cancel
                </button>
              </div>
              {/* <Table dataSource={props.dataSource} columns={props.columns} />
              <button
                type="button"
                onClick={""}
                style={{
                  "min-height": "40px",
                  width: "45%",
                  backgroundColor: "green",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: 20,
                }}
              >
                Submit
              </button> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ExcelPage;
