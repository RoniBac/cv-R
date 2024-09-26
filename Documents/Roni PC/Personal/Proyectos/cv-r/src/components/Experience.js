import profile from './assets/images/R.png'
import {Puesto1,TAiAf1,Empresa1,Puesto2,TAiAf2,Empresa2} from './Managertext'


function Experience() {
  return (
  <div>
        <div class="section experiences-section">
                <h2 class="section-title spanish hidden"><i class="fa fa-briefcase"></i>Experiencias </h2>

                <div class="item">

                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{Puesto1}</h3>
                            <div class="time spanish hidden">{TAiAf1}</div>
                        </div>

                        <div class="company">{Empresa1}</div>

                    </div>


                    <div class="details">

                        <span class="spanish hidden">Base de Conocimientos: </span>

                        <p>
                            Django, Django Rest Framework, BigQuery,
                            PostgreSQL, JavaScript, React, Unit Tests, AWS.
                        </p>

                        <ul class="spanish hidden">
                            <li>Levantar arquitectura de proyectos en Django/React</li>
                            <li>Análisis y creación de modelos relacionales</li>
                            <li>Crear servicios API REST con Django</li>
                            <li>Creacion de reportes dinamicos</li>
                            <li>Soporte y supervisión de proyecto Open edX software</li>
                        </ul>

                        <p class="spanish hidden">{Empresa1} es una gran empresa que busca empoderar a la mujer,
                            Mi experiencia como desarrollador ha sido retadora, 
                            ya que con un un pequeño equipo, desarrollamos
                            una plataforma para gestionar Encuestas que se 
                            realizan a diferentes empresas para medir su 
                            tolerancia al machismo, ademas este proyecto es apoyado por el BID (Banco Interamericano de Desarrollo). Para todo esto
                            creamos un proyecto en Django con una base de datos relacion en RDS de
                            Amazon Web Service, con servicios API REST consumidos desde diferentes proyectos 
                            hechos en React.
                       </p>
                    </div>
                </div>

                

                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{Puesto2}</h3>
                            <div class="time spanish hidden">{TAiAf2}</div>
                        </div>
                        <div class="company">{Empresa2}</div>
                    </div>

                    <div class="details">

                        <span class="spanish hidden">Base de Conocimientos: </span>

                        <p>
                            Django, Django Rest Framework, Flask, Redis
                            PostgreSQL, JavaScript, React, Unit Tests, AWS.
                        </p>

                        <ul class="spanish hidden">
                            <li>Crear servicios API en Django</li>
                            <li>Revisar código del equipo de Backend</li>
                            <li>Planeación de estructuras escalables</li>
                            <li>Optimización de servicios</li>
                            <li>Monitoreo de Instancias</li>
                            <li>Documentar y Responder a clientes de integración</li>
                        </ul>

                       <p class="spanish hidden">Mi experiencia en {Empresa2} ha sido una de las más gratificantes profesionalmente hablando, 
                        he contado con un gran equipo de trabajo, buen ambiente laboral y grandes retos.
                         Empece como desarrollador Backend y en mi linea de carrera me encargue de despliegues,
                         monitoreo de servidores, estructura del software y por peticion propia desarrollar junto 
                         al equipo Frontend. No tengo mucho que decir en tan pocas
                           líneas más que estoy Orgulloso de la empresa y mi trabajo.
                        </p>

                    </div>
                </div>
            </div>    
    </div>
  );
}

export default Experience;