function GoogleDriveModal() {
    
    return (
        <div>
        <div className="d-flex justify-content-center" style={{marginTop:'20px',marginBottom:'20px'}}>
            <div  style={{marginLeft:'10px'}}>
            <a className="btn btn-default" href="http://192.168.2.78:9091/googlesignin" target="_blank" rel="noreferrer">Sign In</a>
            </div>
        </div>
        <div className="d-flex justify-content-center" style={{marginTop:'20px',marginBottom:'20px'}}><button  name="Close" data-dismiss="modal" className="btn btn-secondary btn-sm">Close</button> </div>
       
       </div>
        
    );
}

export default GoogleDriveModal;