import { useLocation } from 'react-router-dom';
import './ExplorerPage.css';
import '../modal/modal.css';
import { history } from '../../helpers';
import items from './ExplorerItems';
import ConnectModal from '../modal/ConnectModal';
import GoogleDriveModal from '../modal/GoogleDriveModal';



interface state {
    name: string;
    title: string;
}
export const ExplorerPage = () => {
    let location = useLocation<state>();
    let showModal= true;
    const { name, title } = location.state;
    function goBack() {
        history.go(-1);
    }
    let itemArr = items[name] || [];
    function modalShowHide() {
         showModal = !showModal;
    }


    return (
        <div className="container">
            <div className="modal" id="connectModal" tabIndex={-1}>
                <div className="modal-header">
                    <h4 className="modal-title" id="exampleModalLabel">{title}</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                { name === 'jira' && <ConnectModal/>}
                { name !== 'jira' && <GoogleDriveModal/>}
            </div>
            
            <div className="justify-content-center">
                <div className="row" style={{ margin: '10px' }}>
                    {/* <img src={images[img]} alt="Google Drive"  className="col-md-2" /> */}
                    <h5 className="col-md-10">{title}</h5>
                    <button type="button" title="Connect" data-toggle="modal" onClick={modalShowHide} data-target="#connectModal" className="btn btn-success btn-circle"><i className="fa fa-link"></i></button>
                    <button onClick={goBack} className="btn btn-default btn-sm">Back</button>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {itemArr.map((val: any, key: any) => {
                        return (
                            <tbody key={Math.random()}>
                                <tr key={Math.random()}>
                                    <td>{val.title}</td>
                                    <td><a className="btn-sm btn-default" href={val.url}>Download Code</a></td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );

}


export default ExplorerPage;

