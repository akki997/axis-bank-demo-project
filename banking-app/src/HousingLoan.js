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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">House Loan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomerLoanComponent type="Housing Loan" />
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

export default function HousingLoan() {
  const classes = useStyles();
  const [modalShow, setModal] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="houseloan.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            House Loan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Interest rates 6.90%* p.a. for women and applicant with credit score
            of 730 and above. Submit your Application Online. *All loans at the
            sole discretion of BOP Ltd. Limited Period Offer. Affordable home
            loans. Lower Interest Rate. Lower Processing Fees
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setModal(true)}>
          Apply
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModal(false)}
      />
    </Card>
  );
}
