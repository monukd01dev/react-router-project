import { useState } from "react"
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext } from "react";
import LoginContext from "../../utils/LoginContext";
import { useNavigate } from "react-router";

const LoginForm = function () {
    const {setIsLoggedIn} = useContext(LoginContext)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const changeHandler = event => {
        setFormData(
            prevData => {
                return { ...prevData, [event.target.name]: event.target.value }
            }
        )

    }
    const submitHandler = event => {
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged In Successfully !!")
        navigate('/dashboard')
        console.log(formData)
    }

    return (
        <form onSubmit={submitHandler} className="w-full flex flex-col gap-3 ">
            <label>
                <p className="mb-1.5 font-medium ">Email Address<sup className="text-red-500">*</sup></p>
                <input
                    className="w-full bg-[#161d27] px-4 py-3 rounded-xl 
    border-b-2 border-b-[#a8adb9] 
    focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                    type="text"
                    name="email"
                    value={formData.email}
                    id="login-email"
                    required
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                />
            </label>
            <label className="w-full font-medium" >
                <p className="mb-1.5">Password<sup className="text-red-500">*</sup></p>
                <div className="w-full relative">

                    <input
                        className="w-full bg-[#161d27] px-4 py-3 rounded-xl border-b-2 border-b-[#a8adb9] focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        id="login-password"
                        required
                        placeholder="Enter your password"
                        onChange={changeHandler}
                    />
                    <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-2xl text-[#a8adb9]" 
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <div className="text-right text-[#5d9da6] text-xs pr-1 pt-0.5 ">Forget Password</div>
            </label>
           <input className="w-full bg-[#fff312] hover:bg-[#fbe012] transition-all duration-200 text-black font-medium mt-5 border-none  outine-none rounded-lg py-2" type="submit" value="Log In" />
        </form>
    )
}
export default LoginForm