import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Modal } from "react-bootstrap";
import CustomerLoanComponent from "./components/CustomerLoanComponent";
import GetLoanComponent from "./components/GetLoanComponent";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Education Loan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GetLoanComponent />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function EducationLoan() {
  const classes = useStyles();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="education1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Education Loan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            100% Finance to study in India or Abroad. Cover Course Fee, Travel,
            Living & other Costs. Hassle free Online Process with Doorstep
            Assistance. Submit your Application Online Now! Attractive Interest
            Rates. Multiple Co-borrower. Country Specific Loans. No Margin
            Money.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setModalShow(true)}>
          See Applied Loan Details
        </Button>
      </CardActions>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}
