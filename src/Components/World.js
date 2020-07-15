import React,{Component} from 'react';
import Axios from 'axios';
import {Table} from 'react-bootstrap';

class World extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            let x=response.data;
            this.setState({data:x});
        })
    }

    render(){
        return(
            <div className="row">
                <h2>World Data</h2> 
                <div className="col-md-12">
                    <Table responsive className="table table-info table-bordered table-striped">
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Confirmed</td>
                                <td>Active</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((itm,ky)=>{
                                    return(
                                        <tr>
                                            <td>{itm.country} <img style={{width:'3em', marginLeft:'10px'}} src={itm.countryInfo.flag}/></td>
                                            <td>{itm.cases}</td>
                                            <td>{itm.active}</td>
                                            <td>{itm.recovered}</td>
                                            <td>{itm.deaths}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
          
        )
    }
}

export default World;