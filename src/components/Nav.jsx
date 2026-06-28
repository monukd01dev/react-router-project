import { Link, NavLink, useNavigate } from "react-router"
import { useContext } from "react"
import LoginContext from "../../utils/LoginContext"
import logo from '../assets/logo.svg'
import toast from "react-hot-toast"

const Nav = function () {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const navigate = useNavigate()

    // button handler
    const signupHandler = () => navigate('/signup')
    const loginHandler = () => {
        navigate('/login')
    }
    const logoutHandler = () => {
        setIsLoggedIn(false)
        toast.success('Logged Out Successfully!!')
        navigate('/')
    }
    const dashboardHandler = () => navigate('/dashboard')

    const navLinkClass = ({ isActive }) =>
        `text-md font-medium transition-all duration-200 ${isActive ? "text-yellow-400" : "text-[#a8adb9]"
        }`;

    return (
        <>
            <nav className="h-16 flex justify-between items-center border px-6 rounded-full mt-2 border-white/10 bg-[#030712]/80 backdrop-blur-md sticky top-2 z-50">
                <Link to='/'>
                    <img src={logo} width={160} height={32} alt="study notion logo" />
                </Link>
                <div className="flex gap-4">
                    <NavLink
                        to='/'
                        className={navLinkClass}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/dashboard'
                        className={navLinkClass}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={navLinkClass}
                    >
                        Contact
                    </NavLink>
                </div>
                <div className="flex gap-3 ">
                    {!isLoggedIn &&
                        <>
                            <button
                                className="bg-[#161d27] px-5 py-2 rounded-full text-[#a8adb9] text-md"
                                onClick={loginHandler}>
                                Login
                            </button>
                            <button
                                className="bg-[#161d27] px-5 py-2 rounded-full text-[#a8adb9] text-md"
                                onClick={signupHandler}>
                                Signup
                            </button>
                        </>
                    }
                    {isLoggedIn &&
                        <>
                            <button
                                className="bg-[#161d27] px-5 py-2 rounded-full text-[#a8adb9] text-md"
                                onClick={logoutHandler}>
                                Logout
                            </button>
                            <button
                                className="bg-[#161d27] px-5 py-2 rounded-full text-[#a8adb9] text-md"
                                onClick={dashboardHandler}>
                                Dashboard
                            </button>
                        </>}
                </div>
            </nav>
        </>
    )
}

export default Nav