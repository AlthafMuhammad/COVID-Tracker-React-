import React,{Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div className="col-md-12 bg-dark text-white">
                <div className="text-center">
                    Created using React by <a href="https://althafmuhammad.me" style={{ textDecoration: 'none' }}>Althaf Muhammad</a>
                </div>
            </div>
        );
    }
}

export default Footer;