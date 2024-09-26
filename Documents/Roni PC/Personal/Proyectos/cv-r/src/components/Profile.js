import profile from './assets/images/R.png'
import {Name, Profe} from './Managertext'

function Profile() {
  return (
    <div>
        <div class="profile-container">
        <img class="profile" src={profile} alt="" />

            <h1 class="name">{Name}</h1>
            <h3 class="tagline spanish hidden">{Profe}</h3>
                                    
            <div class="text-center  spanish hidden"><a class="btn btn-primary" 
                href="./portfolio/">Ver Portafolio</a>
            </div>
                
            <div class="text-center  spanish hidden"><a class="btn btn-primary" 
                href="">Descargar PDF</a>
            </div>
                

        </div>
      
    </div>
  );
}

export default Profile;