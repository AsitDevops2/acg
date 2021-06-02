


export const GoogleDriveModal=()=>{   
    let url="http://localhost:8080/googlesignin";
    return(
      <div className="col-md-10">
        {/* <iframe title="google-drive" src={url}></iframe> */}
        <a href={url}>Download</a>
        <embed src={url} />
     </div>
    )
}

export default GoogleDriveModal;