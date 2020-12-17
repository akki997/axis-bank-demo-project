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
        <Modal.Title id="contained-modal-title-vcenter">
          Vehicle Loan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomerLoanComponent type="Vehicle Loan" />
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

export default function VehicleLoan() {
  const classes = useStyles();
  const [modalShow, setModal] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="carloan.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Vehicle Loan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dreaming of owning a car? The Bank of People Car Loan aims to
            ensures that you drive around the city in your own vehicle! Avail a
            car loan, or opt for a pre-approved car loan, and get the best
            interest rates. Bank of People's New Car Loan offers car loans from
            Rs. 1 Lakh upto 100% on-road price along with benefits. Before
            applying for a car loan online, make sure to use the car loan
            calculator to find out your EMI. Apply for an Bank of People New Car
            Loan and make your dream of owning a car come true.
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
