import React, { useContext } from 'react';
import { authContext } from './Context/UserContext';

const Home = () => {
    const { user } = useContext(authContext)
    return (
        <div>
            {
                user?.email && <h1>Welcome : {user.email}</h1>
            }
        </div>
    );
};

export default Home;