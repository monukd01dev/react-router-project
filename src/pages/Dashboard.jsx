import GifDisplayer from "../components/GifDisplayer"
import tripleh from '../assets/wwe-triple-h.gif'
import securityImg from '../assets/security.png'
import { useContext } from "react";
import LoginContext from "../../utils/LoginContext";
import { useNavigate } from "react-router";

const Dashboard = function () {
    const { isLoggedIn } = useContext(LoginContext)
    const navigate = useNavigate()

    return (
        <div className="mt-40 flex flex-col justify-center items-center gap-4">
            {
                isLoggedIn ? <GifDisplayer gif={tripleh} gifAlt={"triple win move"} width={"400px"} /> :
                    <>
                        <GifDisplayer gif={securityImg} gifAlt={"security meme"} width={"400px"} />
                        <button className="relative  py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 
                            bg-gradient-to-r from-blue-600 to-blue-500 
                            hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] 
                            hover:scale-[1.02] 
                            active:scale-[0.98] 
                            border border-blue-400/20
                            "
                            onClick={()=> navigate('/login')}>
                            Please LogIn First
                        </button>
                    </>
            }

        </div>
    )
}

export default Dashboard