import "./LoginForm.css";
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginForm(){

    return(

        <div className="login-form">

            <div className="Left-part">
                <div>
                <h1>Helo,Welcome!</h1>
                <p>Don't have an account?</p>
                <button>Register</button>
                </div>
               
            </div>

            <div className="Right-part">
                 <h1>Login</h1>
                 <div className="usernameInput">
                    <input type="text" placeholder="Username" id="Username" ></input>
                    <label htmlFor="Username"><PersonIcon></PersonIcon></label>
                 </div>
                 <div className="passwordInput">
                    <input type="password" placeholder="Password" id="Password" ></input>
                    <label htmlFor="Password"><VisibilityOffIcon></VisibilityOffIcon></label>
                 </div>

                  <p>Forgot Password?</p>
                  <button>Login</button>
                  <p>or login with social platforms</p>

                  <ul>
                    <a href=""><LinkedInIcon style={{ color: 'black' }}></LinkedInIcon></a>
                    <a href=""><GitHubIcon style={{ color: 'black' }}></GitHubIcon></a>
                  </ul>
                 
                
            </div>
            
        </div>
    );
}