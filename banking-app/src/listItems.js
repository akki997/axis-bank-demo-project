import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  AccountBalance,
  AttachMoneySharp,
  ExitToApp,
  LocalMall,
  MonetizationOn,
  Payment,
  Receipt,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ls from "local-storage";
export const MainListItems = () => {
  const history = useHistory();
  const home = (e) => {
    // e.preventDefault();
    history.push("/customer-details");
  };
  const debit = (e) => {
    // e.preventDefault();
    history.push("/withdrawal");

    // const nexmo = new Nexmo({
    //   apiKey: "07f4fdc2",
    //   apiSecret: "PWMIu3gOvKZES9C1",
    // });
    // nexmo.verify.request(
    //   {
    //     number: "919999512360",
    //     brand: "Vonage",
    //     code_length: "4",
    //   },
    //   (err, result) => {
    //     console.log(err ? err : result.request_id);
    //   }
    // );
  };
  const credit = (e) => {
    // e.preventDefault();
    history.push("/deposit");
  };
  const transfer = (e) => {
    // e.preventDefault();
    history.push("/fundTransfer");
  };
  const loan = (e) => {
    // e.preventDefault();
    history.push("/loan");
  };
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <AccountBalance onClick={() => home()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          primary="Home"
          onClick={() => home()}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AttachMoneySharp onClick={() => debit()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          onClick={() => debit()}
          primary="Withdraw Amount"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MonetizationOn onClick={() => credit()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          onClick={() => credit()}
          primary="Deposit Amount"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Payment onClick={() => transfer()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          onClick={() => transfer()}
          primary="Fund Transfer"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalMall onClick={() => loan()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          onClick={() => loan()}
          primary="Loan"
        />
      </ListItem>
    </div>
  );
};

export const SecondaryListItems = () => {
  const history = useHistory();

  const transaction = () => {
    history.push("/transaction");
  };
  const logOut = () => {
    ls.remove("customer");
    history.push("/home");
  };
  return (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <Receipt onClick={() => transaction()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          onClick={() => transaction()}
          primary="Transaction Statement"
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ExitToApp onClick={() => logOut()} />
        </ListItemIcon>
        <ListItemText
          style={{ fontWeight: "bold", color: "white" }}
          primary="Log Out"
          onClick={() => logOut()}
        />
      </ListItem>
    </div>
  );
};
