import profile from './assets/images/R.png'
import {Pp1} from './Managertext'


function Summary() {
  return (
  <div>
        <div class="section summary-section">
                
                <h2 class="section-title spanish hidden"><i class="fa fa-user"></i>Perfil Profesional </h2>
                    <div class="summary">
                    
                        <div class="self-desc spanish hidden">
                            <p>
                                {Pp1}

                            </p>

                            <p>
                                Por suerte mi carrera me ha permitido aprender tecnologías, enfoques, metodologías,
                                que me permiten aprender y resolver problemas, no sólo en las habilidades puramente
                                mecánicas, de proceso, de software, etc. Sino también en cómo trabajar con la gente,
                                cómo generar un ambiente de trabajo productivo y amigable.
                                Me gusta ayudarme a mí y a mis colegas a obtener la mejor versión de nosotros mismos.
                            </p>
                            <p>
                                Aunque mi lenguaje de preferencia es Python, y mi fortaleza esta principalmente
                                en el backend. Soy un apacionado al frontend ya que como suelo decir
                                "Con poco, puedes hacer mucho".
                                Me he divertido con el diseño y hacer estilos en css, y trabajar con Javascript.

                                He sido un usuario de Linux por más de 5 años, así que me siento
                                como un pez en el agua en la línea de comandos.
                                A lo largo de mi carrera he asumido diferentes roles: Full Stack, SysAdmin, DevOps,
                                Backend, Líder de Desarrollo y Gerente de Proyecto.
                            </p>

                        </div>

                    </div>
        </div>
      
    </div>
  );
}

export default Summary;