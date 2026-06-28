import login from '../assets/login.png'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";


const OnboardingTemplate = function({title,descOne,descTwo,form,sideImg}){

    return (
        <div className="w-full flex justify-between  my-20">
            <div className="max-w-120 flex-col grow ">
                <h1 className=" text-[#f4f8ff] capitalize text-[26px] font-bold mb-6">{title}</h1>
                <p className='text-[#a8adb9] text-md '>{descOne}</p>
                <p className="text-[#5d9da6] italic text-md mb-6">{descTwo} </p>

                {
                    form === "login" ? <LoginForm/> : <SignupForm/>
                }

                <div className="flex gap-3 h-10 justify-between items-center my-5">
                    <div className="h-px bg-slate-400 grow"></div>
                    <span className='text-slate-400 text-2xl'>or</span>
                    <div className="h-px bg-slate-400 grow"></div>
                </div>
                <button className='w-full flex gap-3 justify-center items-center border border-b-3  border-slate-300 rounded-lg py-2'>
                    <FcGoogle/>
                    <p>Sign in with Google</p>
                </button>
            </div>
            <div className="">
                <figure className='relative max-w-139 '>
                    {/* <img src="" alt="" /> */}
                    <figcaption className='relative   w-full'>
                        <img src={frame} alt="" className='w-full' />
                    </figcaption>
                    <img src={sideImg} alt="" className='absolute -top-4 -left-4 w-full' />
                </figure>
            </div>
        </div>
    )
}
export default OnboardingTemplate;