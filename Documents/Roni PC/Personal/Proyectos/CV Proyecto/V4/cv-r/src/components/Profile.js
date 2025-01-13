import profile from './assets/images/R.jpeg'
import {Name, Profe,Edad} from './Managertext'
import Cv from './assets/pdf/CV-Ronaldo.pdf'

function Profile() {
  return (
    <div>
        <div class="profile-container">
        <img class="profile" src={profile} alt="" />

            <h1 class="name">{Name}</h1>
            <h3 class="tagline spanish hidden">{Profe}</h3>
            <h3 class="tagline spanish hidden">{Edad} años</h3>
                                           
            <div class="text-center  spanish hidden"><a class="btn btn-primary" 
                href={Cv} download="Cv Ronaldo Lopez">Descargar PDF</a>
            </div>
                

        </div>
      
    </div>
  );
}

export default Profile;