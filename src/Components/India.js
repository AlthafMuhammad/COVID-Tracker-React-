import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import Axios from 'axios';

class India extends Component{
    constructor(){
        super()
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response =>{
            this.setState({data:response.data})
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <h2>India Data</h2>
                    <img src="https://www.countryflags.io/IN/shiny/64.png" alt="India"/>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-primary" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases}</h3>
                                    <Card.Text>
                                       [Today : {this.state.data.todayCases}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-warning" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>{this.state.data.active}</h3>
                                </Card.Body>
                                <Card.Text>
                                    &nbsp;
                                </Card.Text>
                            </Card>
                        </div>
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-success" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                    <Card.Text>
                                       [Today : {this.state.data.todayRecovered}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3"  style={ {marginTop: '0.8rem' }}>
                            <Card className="badge badge-danger" style={{width:'20rem'}}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}</h3>
                                    <Card.Text>
                                       [Today : {this.state.data.todayDeaths}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Statedata/>
                </div>
            </div>
        )
    }
}

export default India;