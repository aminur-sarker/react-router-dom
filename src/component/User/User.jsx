import { Link, useNavigate } from 'react-router-dom';
import './user.css'
const User = ({ user }) => {
    const { id, name, phone } = user

// without <LinK> property we can use handle event(use in Details 2)

const navigate = useNavigate();
const handleDetailsBtn2 =()=>{
    navigate("/users/${id}")
}

    return (
        <div className='user'>
            <h2>User Name: {name}</h2>
            <h3>Phone number:{phone}</h3>
            <Link to={`/users/${id}`}><button className='mr-6'>Details</button></Link>
            <button onClick={handleDetailsBtn2}>Details 2</button>        
        </div>
    );
};

export default User;