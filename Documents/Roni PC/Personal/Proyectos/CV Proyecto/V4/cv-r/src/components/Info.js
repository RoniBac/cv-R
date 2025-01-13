import {gmail, phone,linkedin,github,Carr,Uni,AiAf,idioma1,idioma2,interes1,interes2,interes3,interes4} from './Managertext'

function Info() {
  return (
    <div>
            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list">
                    <li class="email"><a href="#" >{gmail}</a></li>
                    <li class="phone">{phone}</li>
                </ul>

            </div>

            <div class="education-container container-block">
                <h2 class="container-block-title spanish hidden"> Educación </h2>
                <div class="item">
                    <h4 class="degree spanish hidden">{Carr}</h4>
                    <h5 class="meta">{Uni}</h5>
                    <div class="time">{AiAf}</div>
                </div>
            </div>

            
            <div class="languages-container container-block">
                <h2 class="container-block-title spanish hidden">Idiomas</h2>
                <ul class="list-unstyled interests-list spanish hidden">
                    <li>{idioma1} <span class="lang-desc"></span></li>
                    <li>{idioma2} <span class="lang-desc"></span></li>
                </ul>
            </div>

            <div class="interests-container container-block spanish hidden">
                <h2 class="container-block-title">Habilidades</h2>
                <ul class="list-unstyled interests-list">
                    <li>{interes1}</li>
                    <li>{interes2}</li>
                    <li>{interes3}</li>
                    <li>{interes4}</li>
                </ul>
            </div>
      
    </div>
  );
}

export default Info;