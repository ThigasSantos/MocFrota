import "../../src/components/css/cadastrarUser.css"

export function CadastrarUser() {
    return (
        <><html>
        <body className="cadast-body">
            <div className="row">
            <div className="col-md-12">
            <form action="index.html" method="post" className="formCad-User">
            <h1 className="cadast-title"> Sign Up </h1>
            
            <fieldset className="campos">
              
              <legend><span className="number">1</span> Your Basic Info</legend>
            
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user_name"/>  
            
              <label htmlFor="email">Email:</label>
              <input type="email" id="mail" name="user_email"/>
           
              <label htmlFor="password">Password:</label>
              <input type="password" id="password"       name="user_password"/>
            
              <label>Age:</label>
              <input type="radio" id="under_13" value="under_13" name="user_age"/><label htmlFor="under_13" className="light">Under 13</label><br/>
              <input type="radio" id="over_13" value="over_13" name="user_age"/><label htmlFor="over_13" className="light">Over 13</label>
              
            </fieldset>

            <fieldset className="campos">  
            
              <legend><span className="number">2</span> Your Profile</legend>
              
             <label htmlFor="bio">Bio:</label>
              <textarea id="bio" name="user_bio"></textarea>
            
           
            
             <label htmlFor="job">Job Role:</label>
              <select id="job" name="user_job">
                <optgroup label="Web">
                  <option value="frontend_developer">Front-End Developer</option>
                  <option value="php_developer">PHP Developer</option>
                  <option value="python_developer">Python Developer</option>
                  <option value="rails_developer">Rails Developer</option>
                  <option value="web_designer">Web Designer</option>
                  <option value="wordpress_developer">Wordpress Developer</option>
                </optgroup>
                <optgroup label="Mobile">
                  <option value="android_developer">Android Developer</option>
                  <option value="ios_developer">IOS Developer</option>
                  <option value="mobile_designer">Mobile Designer</option>
                </optgroup>
                <optgroup label="Business">
                  <option value="business_owner">Business Owner</option>
                  <option value="freelancer">Freelancer</option>
                </optgroup>
              </select>
              
              <label>Interests:</label>
              <input type="checkbox" id="development" value="interest_development" name="user_interest"/><label className="light" htmlFor="development">Development</label><br/>
              <input type="checkbox" id="design" value="interest_design" name="user_interest"/><label className="light" htmlFor="design">Design</label><br/>
              <input type="checkbox" id="business" value="interest_business" name="user_interest"/><label className="light" htmlFor="business">Business</label>
              
            </fieldset>
           
            <button type="submit" className="btnSubmit">Sign Up</button>
            
            </form>
            </div>
          </div>
        </body>
    </html></>    
    )
}

export default CadastrarUser;