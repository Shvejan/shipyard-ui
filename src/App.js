import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import containerbgm from "./container.jpg";
import sea from "./sea1.jpg";
function App() {
  const [allBoxes, setallBoxes] = useState([
    {
      id: 35,
      ship_id: 15609,
      container_destination: "houstan",
      container_origin: "tampabay",
      conatiner_start_date: "2022/06/15",
      container_delivery_date: "2022/06/15",
      container_shape: 40,
      container_priority: 1,
    },
    {
      id: 49,
      ship_id: 58719,
      container_destination: "newyork",
      container_origin: "losangeles",
      conatiner_start_date: "2022/01/14",
      container_delivery_date: "2022/01/13",
      container_shape: 30,
      container_priority: 1,
    },
    {
      id: 77,
      ship_id: 14722,
      container_destination: "longbeach",
      container_origin: "baltimore",
      conatiner_start_date: "2022/01/09",
      container_delivery_date: "2022/01/19",
      container_shape: 20,
      container_priority: 0,
    },
    {
      id: 58,
      ship_id: 54703,
      container_destination: "losangeles",
      container_origin: "tampabay",
      conatiner_start_date: "2022/01/17",
      container_delivery_date: "2022/01/31",
      container_shape: 20,
      container_priority: 0,
    },
    {
      id: 11,
      ship_id: 4722,
      container_destination: "baltimore",
      container_origin: "seattle",
      conatiner_start_date: "2022/01/01",
      container_delivery_date: "2022/01/03",
      container_shape: 20,
      container_priority: 1,
    },
    {
      id: 10,
      ship_id: 79438,
      container_destination: "tampabay",
      container_origin: "chicago",
      conatiner_start_date: "2022/01/05",
      container_delivery_date: "2022/01/15",
      container_shape: 30,
      container_priority: 0,
    },
    {
      id: 87,
      ship_id: 55338,
      container_destination: "seattle",
      container_origin: "boston",
      conatiner_start_date: "2022/01/06",
      container_delivery_date: "2022/01/06",
      container_shape: 40,
      container_priority: 1,
    },
    {
      id: 49,
      ship_id: 22188,
      container_destination: "chicago",
      container_origin: "houstan",
      conatiner_start_date: "2022/01/26",
      container_delivery_date: "2022/02/06",
      container_shape: 40,
      container_priority: 0,
    },
    {
      id: 67,
      ship_id: 54703,
      container_destination: "boston",
      container_origin: "newyork",
      conatiner_start_date: "2022/01/18",
      container_delivery_date: "2022/01/28",
      container_shape: 30,
      container_priority: 0,
    },
    {
      id: 56,
      ship_id: 4722,
      container_destination: "houstan",
      container_origin: "longbeach",
      conatiner_start_date: "2022/06/16",
      container_delivery_date: "2022/06/16",
      container_shape: 20,
      container_priority: 1,
    },
    {
      id: 51,
      ship_id: 79438,
      container_destination: "newyork",
      container_origin: "losangeles",
      conatiner_start_date: "2022/02/01",
      container_delivery_date: "2022/02/09",
      container_shape: 20,
      container_priority: 0,
    },
    {
      id: 99,
      ship_id: 55338,
      container_destination: "longbeach",
      container_origin: "baltimore",
      conatiner_start_date: "2022/02/05",
      container_delivery_date: "2022/02/18",
      container_shape: 20,
      container_priority: 0,
    },
    {
      id: 78,
      ship_id: 22188,
      container_destination: "losangeles",
      container_origin: "tampabay",
      conatiner_start_date: "2022/02/15",
      container_delivery_date: "2022/02/28",
      container_shape: 40,
      container_priority: 0,
    },
    0,
    {
      id: 65,
      ship_id: 57552,
      container_destination: "baltimore",
      container_origin: "losangeles",
      conatiner_start_date: "2022/04/15",
      container_delivery_date: "2022/04/09",
      container_shape: 30,
      container_priority: 1,
    },
    {
      id: 42,
      ship_id: 58719,
      container_destination: "tampabay",
      container_origin: "baltimore",
      conatiner_start_date: "2022/02/07",
      container_delivery_date: "2022/02/01",
      container_shape: 20,
      container_priority: 1,
    },
    {
      id: 22,
      ship_id: 14722,
      container_destination: "losangeles",
      container_origin: "tampabay",
      conatiner_start_date: "2022/01/25",
      container_delivery_date: "2022/02/05",
      container_shape: 30,
      container_priority: 0,
    },
    0,
    {
      id: 111,
      ship_id: 54703,
      container_destination: "baltimore",
      container_origin: "seattle",
      conatiner_start_date: "2022/03/06",
      container_delivery_date: "2022/02/28",
      container_shape: 30,
      container_priority: 1,
    },
    {
      id: 107,
      ship_id: 4722,
      container_destination: "tampabay",
      container_origin: "longbeach",
      conatiner_start_date: "2022/01/14",
      container_delivery_date: "2022/01/18",
      container_shape: 30,
      container_priority: 1,
    },
    0,
    {
      id: 123,
      ship_id: 79438,
      container_destination: "seattle",
      container_origin: "losangeles",
      conatiner_start_date: "2022/02/25",
      container_delivery_date: "2022/03/01",
      container_shape: 40,
      container_priority: 1,
    },
    {
      id: 136,
      ship_id: 55338,
      container_destination: "chicago",
      container_origin: "baltimore",
      conatiner_start_date: "2022/04/04",
      container_delivery_date: "2022/03/29",
      container_shape: 20,
      container_priority: 1,
    },
    {
      id: 141,
      ship_id: 14722,
      container_destination: "boston",
      container_origin: "tampabay",
      conatiner_start_date: "2022/06/01",
      container_delivery_date: "2022/06/11",
      container_shape: 20,
      container_priority: 0,
    },
  ]);
  const [action, setaction] = useState("");
  const [showDetails, setshowDetails] = useState(false);
  const [details, setdetails] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  const [newContaienr, setnewContaienr] = useState(null);
  const [formData, setFormData] = useState({});
  const [containerYards, setcontainerYards] = useState(
    Array.from({ length: 6 }, (_, index) => index + 1)
  );
  useEffect(() => {
    if (newContaienr) optimise();
  }, [newContaienr]);
  const optimise = () => {
    const temp = allBoxes.sort(() => Math.random() - 0.5);
    setallBoxes([...temp]);
  };
  const shuffle = () => {
    const temp = allBoxes.sort(function (a, b) {
      return a.p - b.p;
    });
    setallBoxes([...temp]);
  };
  const addContainer = () => {
    if (count(allBoxes) === 0) {
      alert("ship yard full");
      return;
    }

    let temp = [...allBoxes, { ...formData }];
    temp.splice(temp.indexOf(0), 1);
    setallBoxes([...temp]);
    setnewContaienr(formData.id);
  };
  const deleteContaienr = () => {
    console.log("deleted");
  };
  const count = (arr) => {
    let c = 0;
    arr.map((a) => {
      if (a == 0) c += 1;
    });
    return c;
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setisOpen(false);
    event.preventDefault();
    addContainer();
  };
  const handleChange = (event) => {
    var temp = formData;
    temp[event.target.id] = event.target.value;
    setFormData({ ...temp });
  };
  const renderDetails = (a) => {
    setdetails(a);
    setshowDetails(true);
  };
  return (
    <div
      className="App-header row"
      style={{
        backgroundImage: `url(${sea})`,
        backgroundSize: "cover",
      }}
    >
      <div className="col-9">
        <div
          className="main container row"
          style={{
            backgroundImage: `url(${containerbgm})`,
          }}
        >
          {containerYards.map((i, key) => {
            return (
              <div className="col-4" key={key}>
                <div className="gridBox row">
                  {allBoxes.slice(4 * (i - 1), 4 * i).map((a, i) => {
                    if (a)
                      return (
                        <div className="col-6">
                          <p
                            className={
                              "box " + (a.id === newContaienr ? "green" : "")
                            }
                            key={i}
                            onClick={() => renderDetails(a)}
                          >
                            {a.id}
                          </p>
                        </div>
                      );
                    else
                      return (
                        <div className="col-6">
                          <p className={"box empty"} key={i}>
                            E
                          </p>
                        </div>
                      );
                  })}
                  <p className="text">Container Yard {i}</p>
                  <p className="text">
                    Vacant Slots: {count(allBoxes.slice(4 * (i - 1), 4 * i))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-3 ">
        <div className="buttons">
          <button
            onClick={() => setisOpen(true)}
            className="btn btn-primary btn-lg button"
          >
            Add new Container
          </button>
          <button
            onClick={addContainer}
            className="btn btn-danger btn-lg button"
          >
            Delete Container
          </button>
          <button onClick={optimise} className="btn btn-success btn-lg button">
            optimise
          </button>
        </div>
        <h2>{action}</h2>
      </div>

      <Modal show={isOpen} onHide={() => setisOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Container Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="id">
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Container ID"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ship_id">
              <Form.Control
                type="text"
                placeholder="Ship ID"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="container_destination">
              <Form.Control
                type="text"
                placeholder="Container Destination"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="container_origin">
              <Form.Control
                type="text"
                placeholder="Container Origin"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="conatiner_start_date">
              <Form.Control
                type="text"
                placeholder="Start Date"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="container_delivery_date">
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="container_shape">
              <Form.Label>Container Shape</Form.Label>
              <Form.Control type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="container_priority">
              <Form.Label>Container Priority</Form.Label>
              <Form.Control type="text" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setisOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDetails} onHide={() => setshowDetails(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Container Details</Modal.Title>
        </Modal.Header>
        {details && (
          <Modal.Body>
            <p>Container ID: {details.id}</p>
            <p>Ship ID: {details.ship_id}</p>
            <p>Container Destination: {details.container_destination}</p>
            <p>Container Start Date: {details.id}</p>
            <p>Container Delivery Date: {details.id}</p>
            <p>Container Shape: {details.id}</p>
            <p>Container Priority: {details.id}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowDetails(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
