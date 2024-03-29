import axios from "axios";
import { useState } from "react";
import './modal.css';
export const SalesforceModal = (props:any) => {
   
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        client_id: '',
        client_secret: '',
        grant_type:''

    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password,client_id,client_secret,grant_type} = inputs;
   

    
    function handleChange(e:any) {
        const { name, value } = e.target;
        setInputs((inputs:any) => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password && client_id && client_secret && grant_type) {
                       
            axios({
                method: 'POST',
                url: 'http://192.168.2.78:8087/SalesforceAPI/connect',
               data: {
                    username: username,
                    password: password,
                    clientId: client_id,
                    clientSecret: client_secret,
                    grantType: grant_type

               }
            }).then(function (response) {
                if(response.data.status === 200){
                    alert("Successfully Connected");
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
            <form name="form" onSubmit={handleSubmit} style={{"textAlign":"left"}}>
            <div className="form-group">
                    <label>Grant Type</label>
                    <input type="grant_type" name="grant_type" value={grant_type} onChange={handleChange} className={'form-control' + (submitted && !grant_type ? ' is-invalid' : '')} />
                    {submitted && !grant_type &&
                        <div className="invalid-feedback">Client Secret is required</div>
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
                        <div className="invalid-feedback">Secret Access Key is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Client Id</label>
                    <input type="client_id" name="client_id" value={client_id} onChange={handleChange} className={'form-control' + (submitted && !client_id ? ' is-invalid' : '')} />
                    {submitted && !client_id &&
                        <div className="invalid-feedback">Client Id is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Client Secret</label>
                    <input type="client_secret" name="client_secret" value={client_id} onChange={handleChange} className={'form-control' + (submitted && !client_secret ? ' is-invalid' : '')} />
                    {submitted && !client_secret &&
                        <div className="invalid-feedback">Client Secret is required</div>
                    }
                </div>
                <div className="form-group" style={{marginTop:"15px",marginLeft:'10px'}}>
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




export default SalesforceModal;
