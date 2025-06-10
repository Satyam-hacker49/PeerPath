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
                <button className="registerbtn">Register</button>
                </div>
               
            </div>

            <div className="Right-part">
                 <h1>Login</h1>
                 <div className="usernameInput">
                    <input type="text" placeholder="Username" id="Username" ></input>
                    <div id="usericondiv"><label htmlFor="Username"  ><PersonIcon id="usericon" fontSize="large" ></PersonIcon></label></div>
                    
                 </div>
                 <div className="passwordInput">
                    <input type="password" placeholder="Password" id="Password" ></input>
                    <div id="passicondiv"><label htmlFor="Password"><VisibilityOffIcon id="passicon"></VisibilityOffIcon></label></div>
                    
                 </div>

                  <p>Forgot Password?</p>
                  <button className="Loginbtn">Login</button>
                  <p>or login with social platforms</p>

                  <ul className="socialaccount">
                    <a href="" ><LinkedInIcon style={{ color: 'black',height:"50px",width:"50px",marginRight:"30px" }}></LinkedInIcon></a>
                    <a href="" ><GitHubIcon style={{ color: 'black',height:"50px",width:"50px" }}></GitHubIcon></a>
                  </ul>
                 
                
            </div>
            
        </div>
    );
}