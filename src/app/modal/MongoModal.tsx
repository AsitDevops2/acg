import axios from "axios";
import { useState } from "react";
import './modal.css';
export const MongoModal = (props:any) => {
   
    const [inputs, setInputs] = useState({
        serverAddress: '',
        port: '',
        userName: '',
        password:'',
        db: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { serverAddress, port, userName, password,db} = inputs;
   

    
    function handleChange(e:any) {
        const { name, value } = e.target;
        setInputs((inputs:any) => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (serverAddress && port && password && userName && db) {
                       
            axios({
                method: 'POST',
                url: 'http://192.168.2.78:7071/api/v1/mongodb/getConnection',
                data: {
                    serverAddress: serverAddress,
                    port: port,
                    db: db,
                    userName: userName,
                    password: password
                }
            }).then(function (response) {
                if(response.data.status === 200){
                    alert("Connection successful..!!");
                }else{
                    alert(response.data.message);
                }
               
            }).catch(error=>{
                alert(error.message);
            });
           
        }
    }

    return (
        <div className="col-lg-10 offset-lg-1">
            <form name="form" onSubmit={handleSubmit} style={{"textAlign":"left","marginTop":'10px'}}>            
                <div className="form-group">
                    <label>Server Address</label>
                    <input type="text" name="serverAddress" value={serverAddress} onChange={handleChange} className={'form-control' + (submitted && !serverAddress ? ' is-invalid' : '')} />
                    {submitted && !serverAddress &&
                        <div className="invalid-feedback">ServerAddress is required</div>
                    }
                </div>
                <div className="row">
                <div className="form-group col-md-6">
                    <label>Username</label>
                    <input type="userName" name="userName" value={userName} onChange={handleChange} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    {submitted && !userName &&
                        <div className="invalid-feedback">userName is required</div>
                    }
                </div>
                <div className="form-group col-md-6">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-6">
                    <label>Port</label>
                    <input type="port" name="port" value={port} onChange={handleChange} className={'form-control' + (submitted && !port ? ' is-invalid' : '')} />
                    {submitted && !port &&
                        <div className="invalid-feedback">Port is required</div>
                    }
                </div>
                <div className="form-group col-md-6">
                    <label>Database Name</label>
                    <input type="text" name="db" value={db} onChange={handleChange} className={'form-control' + (submitted && !db ? ' is-invalid' : '')} />
                    {submitted && !db &&
                        <div className="invalid-feedback">DB name is required</div>
                    }
                </div>
                </div>
                <div className="form-group" >
                    <button name="connect" className="btn btn-default btn-sm">
                        Connect
                    </button>
                    <button name="Close" style={{marginLeft:"5px"}} data-dismiss="modal" className="btn btn-default btn-sm">
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
}




export default MongoModal;
