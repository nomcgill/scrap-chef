import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import Tooltip from './tooltip';
import Nav from './nav';
import Kitchen from './kitchen';
import Meals from './meals';
import ProfilePage from './profilepage'

export default class Chef extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            window: 800,
            username: "Sarah",
            ingredients: ["new", "stuff", "here", "is it working?", "PIZZA"],
            options: ["Pork Dumplings", "Mexican Pizza", "Apple Pie", "Delicious Item"]
        };
    }
    
    resize() {
        this.setState({
          window: window.innerWidth
        });
    }

    componentDidMount() {
        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {   
        return (
            <Router>
                <div>
                    <div role="banner" className="banner">
                        <img src="https://nolanmcgill.files.wordpress.com/2019/08/chefshat.png" alt="Chef's Hat Logo"></img>
                        <h1>SCRAP CHEF</h1>
                        <Tooltip />
                    </div>
                    <div>
                        <Nav />
                    </div>
                        <Route exact path="/" component={Kitchen} />
                        <Route 
                            path="/kitchen"
                            render={(props) => <Kitchen {...props} 
                            ingredients={this.state.ingredients}
                            options={this.state.options}/>} />
                        <Route 
                            path="/meals" 
                            render={(props) => 
                            <Meals {...props} 
                                ingredients={this.state.ingredients}
                                options={this.state.options}/>} />
                        <Route 
                            path="/profilepage" 
                            render={(props) => <ProfilePage {...props} username={this.state.username}/>} />
                        {/* <Route path="/profile" component={ProfilePage} /> */}
                        {/* <Kitchen /> */}
                        {/* <Meals /> */}
                        {/* <ProfilePage /> */}
                </div>
            </Router>
        );
    }
}