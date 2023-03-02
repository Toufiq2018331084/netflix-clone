import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt=""
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span>
            </div>
            <div className="right">
              <Search className="icon"/>
              <span>Kid</span>
              <Notifications className="icon"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOHMIlSBO59qqOdaevw3AbVHz6w3OkaGZ8A&usqp=CAU" alt=""/>
              
              <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                  <span>settings</span>
                  <span>logout</span>
                </div>
              </div>
              
            </div>
        </div>
        </div>
  )
}

export default Navbar