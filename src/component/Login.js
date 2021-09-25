import React from 'react'

class Login extends React.Component{

    render(){
       
        return (
       <div  className="login-wrapper"    >
           <div>as</div>
        <form className="box login-box">
            <div className="field">
                <label className="label"> Email</label>
                <div>
                    <input className="input" type="text" placeholder="Email" />
                </div>
            </div>
            <div className="field">
                <label className="label" >Password </label>
                <div className="control">
                    <input className="input" type="password" placeholder="Password"></input>
                </div>
            </div>
            <div className="control">
            <button className="button is-fullwidth is-primary">Login </button>
            </div>
            
        </form>       
        </div>
        ); //JSX Babel 本質應該是使用的react.createElement的寫法
    }

}

export default Login;