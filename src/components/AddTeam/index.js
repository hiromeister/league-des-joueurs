import React from "react";
import { connect } from "react-redux";
import { addTeam } from "../TeamList/actions";

class AddTeam extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = e.target.team.value;
    let id = this.props.team.length + 1;
    this.props.addTeam(id, value);
    e.target.reset();
  }

  render() {
    console.log("TEAM ", this.props.team);
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <input
                placeholder="Nom de l'équipe"
                id="first_name"
                type="text"
                className="validate"
                name="team"
              />
              
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn col s6 offset-s3">
              Ajouter une équipe
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTeam: (id, team) => dispatch(addTeam(id, team))
  };
};

const mapStateToProps = state => ({
  team: state.team.team
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTeam);
