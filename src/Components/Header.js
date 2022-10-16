import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const handleSingOut = () => {
        logOut()
            .then(() => {
                alert('Successfully Log Out', user)
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Firebase-Authentication</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user?.email && <span>Welcome {user.email}</span>
                }

                {
                    user?.email ?
                        <button onClick={handleSingOut} className="btn btn-sm">Log Out</button>
                        : <Link to='/login'> <button className='btn btn-sm'>Log In</button> </Link>
                }
            </div>
        </div>
    );
};

export default Header;