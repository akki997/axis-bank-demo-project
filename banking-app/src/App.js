import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CourseComponent from "./components/CourseComponent";
import CustomerComponent from "./components/CustomerComponent";
import HomeComponent from "./components/HomeComponent";
import GetCustomerComponent from "./components/GetCustomerComponent";
import DepositComponent from "./components/DepositComponent";
import WithdrawComponent from "./components/WithdrawComponent";
import CustomerLoanComponent from "./components/CustomerLoanComponent";
import GetLoanComponent from "./components/GetLoanComponent";
import MoneyTransferComponent from "./components/MoneyTransferComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import SignInCompoment from "./components/SignInCompoment";
import TransactionComponent from "./components/TransactionComponent";
import Dashboard from "./Dashboard";
import Debit from "./Debit";
import Credit from "./Credit";
import FundTransfer from "./FundTransfer";
import Transaction from "./Transaction";
import Loan from "./Loan";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/register" component={CustomerComponent}></Route>
            <Route path="/home" component={HomeComponent}></Route>
            <Route path="/customer-details" component={Dashboard}></Route>
            <Route path="/withdrawal" component={Debit}></Route>
            <Route path="/deposit" component={Credit}></Route>
            <Route path="/loan" component={Loan}></Route>
            <Route
              path="/loan-details/:id"
              component={GetLoanComponent}
            ></Route>
            <Route path="/fundTransfer" component={FundTransfer}></Route>
            <Route path="/signIn" component={SignInCompoment}></Route>
            <Route path="/transaction" component={Transaction}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
