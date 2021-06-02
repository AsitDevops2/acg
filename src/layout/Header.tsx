import { history } from '../helpers';
import './Header.scss';
import './Sidebar.scss';
import logo from '../assets/img/logo.jpg';
import userPic from '../assets/img/admin.png';
import { userActions } from './../actions/user';
import { useDispatch } from 'react-redux';
function Header() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user') || "{}");
    function onLogout() {
        dispatch(userActions.logout());
    }

    // function onProfile() {
    //     history.push(`/profile/${user.id}`);
    // }
    
    function commonRoute(url: string) {
        history.push(url);
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-brand" onClick={() => commonRoute("/home")}>
                <img src={logo} width={40} height={30} className="d-inline-block align-top img-box" alt="" />
                <span className="menu-collapsed"> ACG</span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item dropdown active">
                        <div className="nav-link dropdown-toggle"  id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>{user.firstName + " " + user.lastName + " "}</span>
                            <img src={userPic} width={30} height={30} className="d-inline-block align-top" alt="" />
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* <button className="dropdown-item" onClick={onProfile}>Profile</button> */}
                            <button className="dropdown-item" onClick={onLogout} >Logout</button>

                        </div>


                    </li>

                </ul>
            </div>
        </nav>

    );

}

export  {Header};


