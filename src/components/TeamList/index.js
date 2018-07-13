import React from "react";
import "./index.css";
import {connect} from "react-redux";
import TeamListItem from "../TeamListItem"
import {fetchList} from "./actions"

class TeamList extends React.Component {
    constructor(props){
        super(props);
        /*this.state = {
            teams : []
        }*/
    }
 
    componentDidMount(){
        //this.loadingData();
        this.props.fetchList();
    }

    loadingData(){
        if(this.props.team.length > 0){
            this.setState({
                teams: this.props.team
            })
        } else{
            console.log("Chargement..."); 
        }
    }
    
    render(){
        console.log("component did mount:", this.props.team);
        return (
            
            <div className="teamList">
                <h1> Liste des teams </h1>
                <TeamListItem data={this.props.team} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    team: state.team.team
  });
  


const mapDispatchToProps = dispatch => ({
    fetchList: () => dispatch(fetchList())
  });
export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
