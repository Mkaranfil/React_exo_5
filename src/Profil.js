import { Component } from "react";


class Profil extends Component {


    render(){
        
        const laDescription = this.props.description ? (`Description : ${this.props.description}`): (`Pas de description`);
        
        return(

        
            <div className="Profil" style={{backgroundColor:'pink'}}>
                
               <h2>Prenom: {this.props.Prenom} </h2>
               <h2>Nom:{this.props.nom}</h2>
               <p>Description: {this.props.description}</p>

                {laDescription}
            </div>
        )
    }
}

export default Profil;
