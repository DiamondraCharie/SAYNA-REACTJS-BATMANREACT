import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { useState } from 'react';

function Signup() {

    const [email, setEmail] = useState('');//Décomposition
    const [password, setPassword] = useState ('');
    
    const onSubmit = (e) => {
        e.preventdefault ();
        console.log (email);
        console.log (password);
    }

  return (
    <> 
     <section id="hero">
       <div className="signup-image">
         <div className="container">
           <h1 className="hero-title text-uppercase text-white"> </h1>
         </div>
       </div>
     </section>
     <div className="container formulaire">
       <div className="head text-center">
          <h2>inscription</h2>
          <p>
           Vous avez déjà un compte?
           <Link to='/login'> connectez-vous ici!</Link>
          </p>
       </div>
       <div className="form-body">
       <form onSubmit={onSubmit}>
          <div className="mb-3">
             <label for="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
       </form>
       </div>
       
     </div>
   </>
  )
}

export default Signup
