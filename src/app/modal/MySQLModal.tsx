import axios from "axios";
import { useState } from "react";
import './modal.css';
export const MySQLModal = (props:any) => {
   
    const [inputs, setInputs] = useState({
        url: '',
        userName: '',
        password:''
    });
    const [submitted, setSubmitted] = useState(false);
    const { url, userName, password} = inputs;
   

    
    function handleChange(e:any) {
        const { name, value } = e.target;
        setInputs((inputs:any) => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (url && password && userName) {
                       
            axios({
                method: 'POST',
                url: 'http://192.168.2.78:7070/api/v1/mysql/getConnection',
               data: {
                   userName: userName,
                   password: password,
                   url: url
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
                    <label>URL</label>
                    <input type="text" name="url" value={url} onChange={handleChange} className={'form-control' + (submitted && !url ? ' is-invalid' : '')} />
                    {submitted && !url &&
                        <div className="invalid-feedback">Url is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" name="userName" value={userName} onChange={handleChange} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    {submitted && !userName &&
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
                </div>
            </form>
        </div>
    );
}




export default MySQLModal;
