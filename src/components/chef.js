import React from 'react'
import {connect} from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import Tooltip from './tooltip';
import Nav from './nav';
import Kitchen from './kitchen';
import Meals from './meals';
import ProfilePage from './profilepage'
import { resize, firstCall, fetchMenu } from '../actions'

export class Chef extends React.Component {
    constructor(props) {
        super(props);
        this.updateWidth = this.updateWidth.bind(this)
    }
    
    updateWidth() {
        this.props.dispatch(resize());
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
        if (this.props.first){
            this.props.dispatch(firstCall())
            var stuff = this.props.ingredients
            this.props.dispatch(fetchMenu(stuff))
        };
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {
        return (
            <Router>
                <div>
                    <div role="banner" className="banner">
                        <img src="https://nolanmcgill.files.wordpress.com/2019/09/chefshatgreen.png" alt="Chef's Hat Logo"></img>
                        <h1>SCRAP CHEF</h1>
                        <Tooltip />
                    </div>
                    <div>
                        <Nav />
                    </div>
                        <Route 
                            exact path="/" 
                            render={(props) => <Kitchen {...props} 
                            />} />
                        <Route 
                            path="/kitchen"
                            render={(props) => <Kitchen {...props} 
                            />} />
                        <Route 
                            path="/meals" 
                            render={(props) => <Meals {...props} 
                            />} />
                        <Route 
                            path="/profilepage" 
                            render={(props) => <ProfilePage {...props} />} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    first: state.first,
    window: state.window,
    ingredients: state.ingredients,
    options: state.options
});

export default connect(mapStateToProps)(Chef);
