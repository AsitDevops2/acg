import React, { useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = "86058956828-7k31unlhq6muqbnueu4k93jj58sfs5ut.apps.googleusercontent.com";


function GoogleDriveModal() {

    // const [showloginButton, setShowloginButton] = useState(true);
    // const [showlogoutButton, setShowlogoutButton] = useState(false);
    // const onLoginSuccess = (res:any) => {
    //     alert("You have been logged in successfully");
    //     setShowloginButton(false);
    //     setShowlogoutButton(true);
    // };

    // const onLoginFailure = (res:any) => {
    //     console.log('Login Failed:', res);
    // };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (
        <div className="d-flex justify-content-center" style={{marginTop:'20px',marginBottom:'20px'}}>
            {/* { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In Using UI"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}
            <div className="card" style={{marginLeft:'10px'}}>
            <div className="card-body text-black"><a href="http://192.168.2.78:9091/googlesignin" target="_blank" rel="noreferrer">Sign In</a></div>
            </div>
        </div>
    );
}

export default GoogleDriveModal;