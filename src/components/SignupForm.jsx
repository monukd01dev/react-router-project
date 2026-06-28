import { useState } from "react"
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext } from "react";
import LoginContext from "../../utils/LoginContext";
import { useNavigate } from "react-router";

const SignupFrom = function () {
    const navigate = useNavigate()
    const {setIsLoggedIn} = useContext(LoginContext)
    const [showPassword, setShowPassword] = useState(false)
    const [accountType, setAccountType] = useState("Student");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const changeHandler = event => {
        setFormData(
            prevData => {
                return {
                    ...prevData,
                    [event.target.name]: event.target.value
                }
            }
        )
    }

    const submitHandler = event => {
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Signed Up Successfully !!")
        navigate('/dashboard')
        console.log(formData)
    }


    return (
        <>
            <div className="bg-[#161d27] w-fit p-1 rounded-full mb-6 flex relative">
    {/* Ye Sliding Background hai */}
    <div 
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#030712] rounded-full transition-all duration-300 ease-in-out ${
            accountType === "Student" ? "left-1" : "left-[calc(48%+2px)]"
        }`}
    />

    {/* Buttons */}
    <button 
        onClick={() => setAccountType("Student")}
        className={`${accountType === "Student" ? "text-white" : "text-[#a8adb9]"} 
        relative z-10 font-medium px-6 py-2 rounded-full transition-all duration-300`}
    >
        Student
    </button>
    <button 
        onClick={() => setAccountType("Instructor")}
        className={`${accountType === "Instructor" ? "text-white" : "text-[#a8adb9]"} 
        relative z-10 font-medium px-6 py-2 rounded-full transition-all duration-300`}
    >
        Instructor
    </button>
</div>
            <form onSubmit={submitHandler} className="w-full flex flex-col gap-3 " >
                {/* FirstName and LastName*/}
                <div className="flex gap-3">
                    <label className="grow">
                    <p className="mb-1.5 font-medium ">First Name<sup className="text-red-500">*</sup></p>
                    <input
                        className="w-full bg-[#161d27] px-4 py-3 rounded-xl border-b-2 border-b-[#a8adb9] focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        id="signup-firstName"
                        required
                        placeholder="Lalit"
                        onChange={changeHandler}
                    />
                </label>
                <label className="grow">
                    <p className="mb-1.5 font-medium ">Last Name<sup className="text-red-500">*</sup></p>
                    <input
                        className="w-full bg-[#161d27] px-4 py-3 rounded-xl border-b-2 border-b-[#a8adb9] focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        id="signup-firstName"
                        required
                        placeholder="Yadav"
                        onChange={changeHandler}
                    />
                </label>
                </div>

                {/* Email */}
                <label>
                    <p className="mb-1.5 font-medium ">Email Address<sup className="text-red-500">*</sup></p>
                    <input
                        className="w-full bg-[#161d27] px-4 py-3 rounded-xl border-b-2 border-b-[#a8adb9] focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                        type="text"
                        name="email"
                        value={formData.email}
                        id="login-email"
                        required
                        placeholder="Enter your email address"
                        onChange={changeHandler}
                    />
                </label>

                {/* Password and ConfirmPassword*/}
                <div className="flex gap-3">
                    <label className="w-full font-medium" >
                <p className="mb-1.5">Create Password<sup className="text-red-500">*</sup></p>
                <div className="w-full relative">

                    <input
                        className="w-full bg-[#161d27] px-4 py-3 rounded-xl border-b-2 border-b-[#a8adb9] focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        id="signup-password"
                        required
                        placeholder="Enter password"
                        onChange={changeHandler}
                    />
                    <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-2xl text-[#a8adb9]" 
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                
            </label>
            <label className="w-full font-medium" >
                <p className="mb-1.5">Confirm Password<sup className="text-red-500">*</sup></p>
                <div className="w-full relative">

                    <input
                        className="w-full bg-[#161d27] px-4 py-3 rounded-xl border-b-2 border-b-[#a8adb9] focus:border-b-blue-400 focus:outline-none transition-all duration-200"
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        id="signup-confirmPassword"
                        required
                        placeholder="Confirm Password"
                        onChange={changeHandler}
                    />
                    <div className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-2xl text-[#a8adb9]" 
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                {/* <div className="text-right text-[#5d9da6] text-xs pr-1 pt-0.5 ">Forget Password</div> */}
            </label>
                </div>
                {/* submit  */}
                <input className="w-full bg-[#fff312] hover:bg-[#fbe012] transition-all duration-200 text-black font-medium mt-5 border-none  outine-none rounded-lg py-2" type="submit" value="Sign Up" />

            </form>
        </>
    )
}
export default SignupFrom