import React, { useState, useEffect } from 'react'
import img from "../img/img_411076.png"
import { Link, useNavigate } from 'react-router-dom'
import '../styles/SigninBtn.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'
export default function SigninBtn() {
    const [display, setDisplay] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
    }
    const handleLogin = () => {
        navigate('/login')
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const user_info = document.querySelector(".navlist_user_info");
            const btn = document.querySelector(".profile-btn");
            if (display && user_info && btn && !user_info.contains(event.target) && !btn.contains(event.target)) {
                setDisplay(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [display]);

    function toggleMenu() {
        setDisplay(prev => !prev)
    }
    //access the filter type set
    const auth = useSelector((state) => {
        return state.auth
    })
    return (
        <>
            {auth.isAuthenticated ? (
                <div className='user-profile'>
                    <div className='profile-btn' onClick={toggleMenu}>
                        <div className='profile_icon'>
                            <img
                                src={img}
                                alt={auth.user}
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    {display && (
                        <div className='navlist'>
                            <div className='navlist_user_info'>
                                <div className='profile_icon'>
                                    <img
                                        src={img}
                                        alt={auth.user}
                                        width="52"
                                        height="52"
                                    />
                                </div>
                                <div className='user_info'>
                                    <p>{auth.user || 'User name'}</p>
                                </div>
                            </div>
                            <div className='navlist-links'>
                                <button>
                                    <Link to='/pets/favorites'><p>Favorites</p></Link>
                                </button>
                                <button onClick={() => handleLogout()}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="25"
                                        viewBox="0 -960 960 960"
                                        width="25"
                                    >
                                        <path
                                            d="M201.54-120q-23.529 0-40.61-17.082-17.082-17.081-17.082-40.61v-584.614q0-23.529 17.082-40.611 17.081-17.082 40.61-17.082h276.384v45.384H201.54q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v584.614q0 4.616 3.847 8.462 3.846 3.846 8.462 3.846h276.384V-120H201.54Zm462.921-197.693-32.999-32.23 97.384-97.384H375.769v-45.384h351.847l-97.385-97.384 32.615-32.615 153.306 153.498-151.691 151.499Z"
                                        />
                                    </svg>
                                    <p>Logout</p>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <button className='loginbtn' onClick={() => handleLogin()}>
                    Sign in
                </button>
            )}
        </>
    )
}