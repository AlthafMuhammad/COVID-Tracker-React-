import React,{Component} from 'react';
import Axios from 'axios';
import {Accordion,Card,Button} from 'react-bootstrap';

class Statedata extends Component{
    constructor(){
        super();
        this.state={
            stateData: {}
        };
    }

  componentDidMount(){
      Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then(response => {
          var x=response.data
          this.setState({stateData:x});
      });
  }

    render(){
        let keys=Object.keys(this.state.stateData);
        return(
            <div className="row">
                <div className="col-md-12">
                    <Accordion>
                        {
                            keys.map((itm,ky)=>{
                                let districts=this.state.stateData[itm].districtData;
                                let districtkeys=Object.keys(districts);

                                
                                return(
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                {itm}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>Confirmed</td>
                                                            <td>Active</td>
                                                            <td>Recovered</td>
                                                            <td>Deaths</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default Statedata;