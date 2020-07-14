import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

class India extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/IN/shiny/64.png"/>
                    <h2>India</h2>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-primary" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>900000</h3>
                                    <Card.Text>
                                       [Today : 250]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-warning" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>900000</h3>
                                    <Card.Text>
                                       [Today : 250]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-success" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>900000</h3>
                                    <Card.Text>
                                       [Today : 250]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-danger" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>900000</h3>
                                    <Card.Text>
                                       [Today : 250]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default India;