
import './App.css';
import Profil from "./Profil";

function App() {

  return (


    <div className="App">

      <h1>Les Profils </h1>

      <Profil Prenom="Nicolas" nom="Primo" description="WebDev"/>   
        <hr/>
      <Profil Prenom="Martin" nom="Chimiste" description="Lol"/> 
        <hr/>
      <Profil Prenom="Beyonce" nom="Chanteuse" description="song"/>  
        <hr/>
      <Profil Prenom="Ibra" nom="Ousssari"/>  
     
    </div>
  );


}

export default App;
