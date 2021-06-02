import {useEffect } from 'react';
import './Sidebar.scss';
// import { history } from '../helpers';
function  Sidebar() {

    useEffect(() => { 
        SidebarCollapse();
    },[]);
    function SidebarCollapse () {
        $('.menu-collapsed').toggleClass('d-none');
        $('.sidebar-submenu').toggleClass('d-none');
        $('.submenu-icon').toggleClass('d-none');
        $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
        // Treating d-flex/d-none on separators with title
        var SeparatorTitle = $('.sidebar-separator-title');
        if ( SeparatorTitle.hasClass('d-flex') ) {
            SeparatorTitle.removeClass('d-flex');
        } else {
            SeparatorTitle.addClass('d-flex');
        }
        // Collapse/Expand icon
        $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    }
    // function commonRoute(url: string){
    //     history.push(url);
    // }
      
    return(
        <div className="row" id="body-row">
    <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
        <ul className="list-group">
            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>MAIN MENU</small>
            </li>
           
            <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3"></span> 
                    <span className="menu-collapsed">Dashboard</span>
                    <span className="submenu-icon ml-auto"></span>
                </div>
            </a>
            <div id='submenu1' className="collapse sidebar-submenu">
                {/* <a href="/charts" className="list-group-item list-group-item-action bg-dark text-white">
                    <span className="menu-collapsed">Charts</span>
                </a> */}
                <span className="list-group-item list-group-item-action bg-dark text-white"><i className="fa fa-home"></i>Chart</span>

                
            </div>
                    

           
            <a href="/calender" className="bg-dark list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-calendar fa-fw mr-3"></span>
                    <span className="menu-collapsed">Calendar</span>
                </div>
            </a>
            
            <button  onClick={SidebarCollapse} data-toggle="sidebar-colapse" className="bg-dark text-white list-group-item list-group-item-action d-flex align-items-center">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span id="collapse-icon" className="fa fa-2x mr-3"></span>
                    <span id="collapse-text" className="menu-collapsed">Collapse Menu</span>
                </div>
            </button>
            
        </ul>
    </div>

    
</div>
    );
    
}

export {Sidebar};


