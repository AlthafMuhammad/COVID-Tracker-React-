import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div className="col-md-12 bg-dark text-white">
                <div className="text-center">
                    <p>
                        <b>Data Sources</b>: <a href="https://api.covid19india.org/" style={{ textDecoration: 'none', color:'white'}} target="_blank">COVID-19 India Org Data Operations Group</a><br/>
                        <a href="https://corona.lmao.ninja/" style={{ textDecoration: 'none', color:'white' }} target="_blank">disease.sh - Open Disease Data</a>
                    </p>
            
                    Created using React by <a href="https://althafmuhammad.me" style={{ textDecoration: 'none' }}>Althaf Muhammad</a>
                </div>
            </div>
        );
    }
}

export default Footer;