import React from 'React';
import ReactDom from 'React-Dom';

import './style.css'
const App = () => { 
    const linkImageStyle = {
        backgroundImage:'url(\'"C:\Users\mansh\Downloads\react.png\')'
    }

    return (
    <Fragment>
        <nav className="navigation">
        <a>img height="40px" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telerik.com%2Fblogs%2Fbeginners-guide-loops-in-react-jsx&psig=AOvVaw0p-pfPJ1oih6H7hQypKc5b&ust=1681308344966000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjY8eb_of4CFQAAAAAdAAAAABAQ"</a>
        <ul>
            <li>Home</li>
        </ul>
        </nav>
        <main>
            <div className="leftContent">
              img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telerik.com%2Fblogs%2Fbeginners-guide-loops-in-react-jsx&psig=AOvVaw0p-pfPJ1oih6H7hQypKc5b&ust=1681308344966000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjY8eb_of4CFQAAAAAdAAAAABAQ"
              <form>
                <h2 className="formtitle">Add a bookmark</h2>
                <div>
                    <label 
                     for="linkTitle" 
                     className="formlabel">Enter a bookmark name</label>
                    <input> 
                     type="text"
                     name="linkTitle"
                     minLength="1"
                     maxLength= "25"
                     placeHolder="25 characters max
                     </input>
                </div>
                <div>
                <label>
                for=linkHref"
                className="formlabel"Enter a bookmark name</label>
               <input> 
                type="text"
                name="linkHref"
                minLength="7"
                maxLength= "25"
                placeHolder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telerik.com%2Fblogs%2Fbeginners-guide-loops-in-react-jsx&psig=AOvVaw0p-pfPJ1oih6H7hQypKc5b&ust=1681308344966000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjY8eb_of4CFQAAAAAdAAAAABAQ/" </input>
                
                </div>
                
                <button>Add</button>

              </form>
            </div>
            <div className="rightContent">
                <div className = "linkCard">
                    <div className= "linkCardImage" style={linkImageStyle}>
                    <div className = "linkCardLink"><h2><a href="#">My link!</a></h2></div>    
                    </div>
                </div>
                </div>
        </main>
        </Fragment>
    )
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
)