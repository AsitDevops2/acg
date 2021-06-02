import jira from '../../assets/img/jira.png';
import gd from '../../assets/img/google_drive.png';
import oracle from '../../assets/img/oracle.png';
import sf from '../../assets/img/sf.png';
import ldap from '../../assets/img/ldap.png';
import react from '../../assets/img/react.png';
import mongo from '../../assets/img/mongo.png';
import mysql from '../../assets/img/mysql.png';
import aws from '../../assets/img/aws.png';
import mazure from '../../assets/img/mazure.png'
import './HomePage.css';
import {history} from '../../helpers';
function HomePage() {
    
    function explorerItem(data:any){
           history.push('/explorer',data);
    }

    return (
        <div>
            <div className="row justify-content-center margin-top">
                <div className="card col-md-2 ml-3">
                    <img src={jira} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <a href="https://github.com/AsitDevops2/jira-connector/archive/refs/heads/main.zip" className="btn btn-success btn-sm">Download Code</a> */}
                        <button className="btn btn-default btn-sm" onClick={()=>{explorerItem({name:'jira',title:'Jira Connectors'})}}>
                        Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={gd} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <a href="https://github.com/AsitDevops2/google-drive-connect/archive/refs/heads/main.zip" className="btn btn-success btn-sm">Download Code</a> */}
                        <button className="btn btn-default btn-sm" onClick={()=>{explorerItem({name:'googleDrive',title:'Google Drive Connectors'})}}>Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={oracle} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <button className="btn btn-success btn-sm">Download Code</button> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={sf} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <button className="btn btn-success btn-sm">Download Code</button> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={ldap} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <button className="btn btn-success btn-sm">Download Code</button> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center margin-top">
                <div className="card col-md-2 ml-3">
                    <img src={react} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">React JS</h5> */}
                    <div className="btn-group">
                        {/* <a href="http://localhost:8082/jira/jira-connector.zip" className="btn btn-success btn-sm">Download Code</a> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={mongo} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <a href="http://localhost:8082/google_drive/google-drive-connector.zip" className="btn btn-success btn-sm">Download Code</a> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={mysql} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <button className="btn btn-success btn-sm">Download Code</button> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={aws} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <button className="btn btn-success btn-sm">Download Code</button> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
                <div className="card col-md-2 ml-3">
                    <img src={mazure} className="card-img-top" alt="..." />
                    {/* <h5 className="card-title">Java Spring Boot</h5> */}
                    <div className="btn-group">
                        {/* <button className="btn btn-success btn-sm">Download Code</button> */}
                        <button className="btn btn-default btn-sm">Explore</button>
                    </div>
                </div>
               

            </div>
        </div>
    );

}

export default HomePage;