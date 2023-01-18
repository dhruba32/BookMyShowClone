import LockIcon from '@mui/icons-material/Lock';
import TextFields from './TextFields'
import Button from '@mui/material/Button';
import './loginpage.css'

const LoginPage = () => {

    return(
        <>
            <div className="mainLogin">
                <LockIcon />
                <h3>Sign Up</h3>
                <TextFields type="text" lable = "Email*" className='textField'/>
                <TextFields type="password" lable = "Password*" className='textField'/>
                <Button variant="contained" className='btn'>Login</Button>
                <p className='signAlert'>
                    <u>Don't have an account yet?  Sign Up</u>
                </p>
            </div>
        </>
    )
}

export default LoginPage;