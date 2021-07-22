import axios from "axios";
import { useState } from "react";
import './modal.css';
export const AWSModal = (props:any) => {
   
    const [inputs, setInputs] = useState({
        access_key_id: '',
        secret_access_key: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { access_key_id, secret_access_key} = inputs;
   

    
    function handleChange(e:any) {
        const { name, value } = e.target;
        setInputs((inputs:any) => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (access_key_id && secret_access_key) {
                       
            axios({
                method: 'POST',
                url: 'http://192.168.2.78:8087/api/aws/getEC2Connection',
               data: {
                   access_key_id: access_key_id,
                   secret_access_key: secret_access_key
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
                    <label>Access Key Id</label>
                    <input type="access_key_id" name="access_key_id" value={access_key_id} onChange={handleChange} className={'form-control' + (submitted && !access_key_id ? ' is-invalid' : '')} />
                    {submitted && !access_key_id &&
                        <div className="invalid-feedback">Access Key Id is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Secret Access Key</label>
                    <input type="secret_access_key" name="secret_access_key" value={secret_access_key} onChange={handleChange} className={'form-control' + (submitted && !secret_access_key ? ' is-invalid' : '')} />
                    {submitted && !secret_access_key &&
                        <div className="invalid-feedback">Secret Access Key is required</div>
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




export default AWSModal;
