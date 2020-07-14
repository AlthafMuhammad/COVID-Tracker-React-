import React,{Component} from 'react';
import Axios from 'axios';
import {Accordion,Card,Button} from 'react-bootstrap';

class Statedata extends Component{
    constructor(){
        super();
        this.state={
            stateData:{}
        };
    }

  componentDidMount(){
      Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then(response => {
          let x=response.data
          this.setState({stateData:x});
      });
  }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Statedata;