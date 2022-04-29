import '../style/login.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginForm from '../components/loginComponents/form';
const Login = () => {




  return (
    <>
        <div className='loginWrapper px-4 wx-576 mx-auto'>
            <header>
                <a href='/' className='my-2 d-block' style={{color: '#fff'}}><ArrowForwardIcon /></a>
                <div>
                    <img className="d-block login_logoImg" src="https://epasazh.com/_nuxt/img/pasazh-auth-logo.c4e6d4d.png" alt='epasazh logo' />
                </div>
            </header>
            <LoginForm />
        </div>
    </>
  );
};

export default Login;
