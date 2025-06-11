import "./RegistrationForm.css";
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function RegistrationForm(){

    return(

        <div className="Registration-form">

            <div className="Registration-Left-part">
                 <h1>Registration</h1>

                     <div className="regis-social-section">
                        <div className="regis-social-title">Register on</div>
                        <div className="Regis-socialaccount">
                            <a className="regis-icon-link" href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F">
                                <LinkedInIcon style={{ color: 'black', height: "50px", width: "50px" }} />
                            </a>
                            <a className="regis-icon-link" href="https://github.com/signup">
                                <GitHubIcon style={{ color: 'black', height: "50px", width: "50px" }} />
                            </a>
                        </div>
                     </div>
    
                 <p>Still Have Issue?</p>

                 <div className="scholarnuminput">
                    <input type="text" placeholder="Scholar Number" id="scholarNum" ></input>
                    <div id="scholarNumicondiv"><label htmlFor="scholarNum" ><PersonIcon id="scholaricon" fontSize="large" ></PersonIcon></label>
                 </div>
                    
                 </div>
                 <div className="IssueInput">
                    <textarea placeholder="Issue Encountered" id="Issue" ></textarea>
                 </div>

                 <button className="issuesubmitbtn">Submit Response</button>
                
            </div>

            
            <div className="Registration-Right-part">
                <div>
                <h1>Welcome Back!</h1>
                <p>Already have an account?</p>
                <button className="loginbtn">Login</button>
                </div>
               
            </div>

            

        </div>
    );
}