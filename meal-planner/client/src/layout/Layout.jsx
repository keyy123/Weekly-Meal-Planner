import {Link} from 'react-router-dom'

export default function Layout(props) {
  return (
    <header>
    <h1>App Name</h1>
    {currentUser ? (
      <div>
        <p>{currentUser.username}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <Link to='/login'>Login/SignUp</Link>
    )}
    <hr />
    {currentUser && (
      <div>
        <Link to='/Menus'>Menus</Link>
        <Link to='/'>Home</Link>  
      </div>
    )}
    {props.children}
  </header>
  )
}
