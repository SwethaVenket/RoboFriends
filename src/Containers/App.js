import React, {Component} from 'react';
import CardList from '../Components/CardList';
import './App.css';
import { connect } from 'react-redux';
//import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component{
  
    componentDidMount() {
        this.props.onRequestRobots();
      
    }

     render(){
        
        const { robots, searchField , onSearchChange,isPending } = this.props;
        console.log(robots);
        const filteredrobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
       console.log(isPending);
         return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                {isPending ? <h1>Loading</h1> :
                <ErrorBoundary>
                        <CardList robots={filteredrobots} />
                </ErrorBoundary>
                }
            </Scroll>
        </div>
        );
        }
    }

    


export default connect(mapStateToProps, mapDispatchToProps)(App)
