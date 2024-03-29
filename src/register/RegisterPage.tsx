import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function RegisterPage() {
    const [user, setUser] = useState({
        email:'',
        firstName: '',
        lastName: '',
        password: '',
        orgName:'',
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector((state:any) => state.register.registering);
    const dispatch = useDispatch();

   
    function handleChange(e:any) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.email && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="col-lg-4 offset-lg-4" style={{marginTop:'1%'}}>
            <h4 style={{textAlign:"center"}}>Register With ACG</h4>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Organization Name</label>
                    <input type="text" name="orgName" value={user.orgName} onChange={handleChange} className={'form-control' + (submitted && !user.orgName ? ' is-invalid' : '')} />
                    {submitted && !user.orgName &&
                        <div className="invalid-feedback">Organisation is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-default mr-2">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="/login" className="btn btn-secondary">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;