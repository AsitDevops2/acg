import axios from "axios";
import { useState } from "react";
import './modal.css';
import {history} from '../../helpers';

export const ConnectModal = (props:any) => {
   
    const [inputs, setInputs] = useState({
        url: '',
        username: '',
        password:''
    });
    const [submitted, setSubmitted] = useState(false);
    const { url, username, password} = inputs;
   
    
    
    function handleChange(e:any) {
        const { name, value } = e.target;
        setInputs((inputs:any) => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (url && password && username) {
            let authToken= btoa(username+":"+password);
           
            axios({
                method: 'GET',
                url: 'http://192.168.2.78:8087/api/v1/jira/getConnection',
                headers: { 
                    "authorization": "Basic "+authToken,
                    "url": url,
                }
            }).then(function (response) {
                if(response.status === 200){
                    alert("Connection successfull..!!");
                }else{
                    alert("Please enter correct details.");
                }
               
            }).catch(error=>{
                alert(error.message);
            });
           
        }
    }

    return (
        <div className="col-lg-10 offset-lg-1">
            {/* <h2>Jira Connection</h2> */}
            <form name="form" onSubmit={handleSubmit} style={{"textAlign":"left"}}>
                <div className="form-group">
                    <label>Url</label>
                    <input type="text" name="url" value={url} onChange={handleChange} className={'form-control' + (submitted && !url ? ' is-invalid' : '')} />
                    {submitted && !url &&
                        <div className="invalid-feedback">Url is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group" style={{marginTop:"15px"}}>
                    <button name="connect" className="btn btn-default btn-sm">
                        Connect
                    </button>
                    <button name="Close" style={{marginLeft:"5px"}} data-dismiss="modal" className="btn btn-secondary btn-sm">
                        Close
                    </button> 
                </div>
            </form>
        </div>
    );
}




export default ConnectModal;
