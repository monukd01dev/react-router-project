import OnboardingTemplate from "../components/OnboardingTemplate"
import signupImg from '../assets/signup.png'
const Signup = function () {
     const config = {
            title : 'Join the millions learning to code with StudyNotion for free',
            descOne : 'Build Skills for today, tommorrow and beyond',
            descTwo : 'Education to future-proof your career',
            form : 'signup',
            sideImg : signupImg
        }
    return (
        <OnboardingTemplate {...config}/>
    )
}

export default Signup