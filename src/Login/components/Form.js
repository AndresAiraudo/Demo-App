import React from "react";
import './Form.scss';

function Form (props){
    return(
        <div className="form-container">
            <form className="needs-validation">
                <div className="form">
                    <div className="campo">  
                        <label htmlFor="user">
                            <span>User</span>
                            <input type="text" name="user" id="user" required maxLength={40}/>
                        </label>
                    </div>
                    <div className="campo">
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" id="password" required maxLength={40}/>
                        </label>
                    </div>
                    <button type="submit" className="btn-submit">Log in</button>
                </div>
            </form>
        </div>
    )
}

export default Form;