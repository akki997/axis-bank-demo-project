import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import ls from "local-storage";
import CustomerService from "./Service/CustomerService";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [customer, setCustomer] = useState(null);
  const [balance, setBalance] = useState();
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  useEffect(() => {
    console.log(ls.get("customer"));
    setCustomer(ls.get("customer"));
    CustomerService.getCustomer(
      customer?.customerAccountNumber,
      customer?.customerPin
    ).then((res) => {
      setBalance(res.data.currentAmount);
    });
  }, [customer?.customerAccountNumber, customer?.customerPin]);
  return (
    <React.Fragment>
      <Title>Total Account Balance</Title>
      <Typography component="p" variant="h4">
        Rs. {balance}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on{" "}
        {new Date().getDate() + " " + month + " ," + new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Statement
        </Link>
      </div>
    </React.Fragment>
  );
}
