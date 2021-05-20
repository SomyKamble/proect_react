import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  green: {
    background: "#21CE99",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: 28,
    width: 150,
    padding: "0 30px",
  },
  red: {
    background: "#F45631",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: 28,
    width: 150,
    padding: "0 30px",
  },
});

export default function Hook(props) {
  const classes = useStyles();
  return (
    <Button className={props.dChange ? classes.green : classes.red}>
      {props.bankName}
    </Button>
  );
}
