// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import RegisterPage from './register/RegisterPage';
import {history, PrivateRoute, Toast} from './helpers';
import { useSelector } from 'react-redux';
import { alertActions } from './actions';
// import { HomePage } from '../HomePage';
// import { UserAddEdit, UserList, UserProfile } from '../_components/_users';
import LoginPage from './login/LoginPage';
import { Header } from './layout';
import { useEffect } from 'react';
import HomePage from './app/home/HomePage';
import ExplorerPage from './app/explorer/ExplorerPage';


function App() {
    const alert = useSelector((state:any) => state.alert);
   // const dispatch = useDispatch();
    let user = localStorage.getItem('user');
    useEffect(() => {
        history.listen((location, action) => {
            alertActions.clear();
        });
    }, []);

    return (

        <div className="container" style={{ "maxWidth": "none" }}>
            {alert.message && Toast(alert) }

            <Router history={history}>
                <div className="row">
                    {user &&
                        <div className="col-12 bg-primary">
                            <Header/>
                        </div>
                    }
                    {/* {user &&
                        <Sidebar />
                    } */}

                    <div className="main col  h-100" style={{ "margin": "5px" }}>

                        <Switch>
                            {/* <PrivateRoute exact path="/profile/:id" component={UserProfile} />
                            <PrivateRoute path={["/add_edit/:id", "/add_edit"]} component={UserAddEdit} />
                            <PrivateRoute exact path={["/users"]} component={UserList} />
                            {user && getAccess('product') && <PrivateRoute exact path="/products" component={ProductList} />}
                            <PrivateRoute exact path={["/product/add_edit/:id", "/product/add_edit"]} component={ProductAddEdit} />
                            <PrivateRoute exact path={["/category/add_edit/:id", "/category/add_edit"]} component={CategoryAddEdit} />
                            <PrivateRoute exact path={"/categorys"} component={CategoryList} />
                            <PrivateRoute exact path="/roles" component={RoleList} />
                            <PrivateRoute exact path={["/role/add_edit/:id", "/role/add_edit"]} component={RoleAddEdit} />*/}
                            <PrivateRoute exact path="/" component={HomePage} />
                            <PrivateRoute exact path="/explorer" component={ExplorerPage} />
                            <Route path="/login" component={LoginPage} /> 
                            <Route path="/register" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </Router>

        </div>
    );
}


export default App;
