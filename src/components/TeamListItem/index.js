import React from "react";

const TeamListItem = props => {
  const teams = props.data;

  return (
    <div className="row">
      <div className="cards">

        {teams.map(team => (
          <div className="col s4" key={team.id}>
            <div className="team-card card" >
              <h2 className="card-title"> {team.name} </h2>
              <div className="card-content">
                <ul>
                  {team.joueurs.map(joueur => (
                    <li key={`joueurs : ${joueur.id}`}> {joueur.name} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamListItem;
