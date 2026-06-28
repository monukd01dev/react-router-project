import OnboardingTemplate from "../components/OnboardingTemplate"
import loginImg from '../assets/login.png'

const Login = function () {

    const config = {
        title : 'welcome back',
        descOne : 'Build Skills for today, tommorrow and beyond',
        descTwo : 'Education to future-proof your career',
        form : 'login',
        sideImg : loginImg
    }

    return (
        <OnboardingTemplate {...config}/>
    )
}

export default Login