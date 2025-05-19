import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [activo, setActivo] = useState(null);
  const [index, setIndex] = useState(1);
  const [indexInicio, setIndexInicio] = useState(0);
  const [fade, setFade] = useState(false);
  const isFirstRender = useRef(true);

  const sectionInicioRef = useRef(null);
  const sectionInformacionRef = useRef(null);
  const sectionExperienciaRef = useRef(null);
  const sectionProyectosRef = useRef(null);
  const sectionContactoRef = useRef(null);
  const imagenes = [
    '',
    'fondo1.jpg',
    'fondo2.jpg',
    'fondo3.jpg',
    'fondo4.jpg',
    'fondo5.jpg',
    'fondo6.jpg',
    'fondo7.jpg',
    'fondo8.jpg',
  ];

  const cambiarFondo = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length) ;
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setIndexInicio(index);
    }, 100);
    return () => clearTimeout(timer);
  }, [activo]);

  const estiloFondoInicio = {
    backgroundImage: `url(/img/${imagenes[indexInicio]})`,
    backgroundSize: 'cover',
  }

  const estiloFondo = {
    backgroundImage: `url(/img/${imagenes[index]})`,
    backgroundSize: 'cover',
  }
  const estiloFondoTarjeta = {
    backgroundImage: `url(/img/${imagenes[index]})`,
    backgroundSize: 'cover',
    transition: 'opacity 0.3s ease',
    opacity: fade ? 0 : 1,
  }

  const handleScrollToSection = (ref, index) => {
    setActivo(index);
    if (ref) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/heinersolano/", "_blank");
  };
  const handleGit = () => {
    window.open("https://github.com/heinerandres", "_blank");
  };
  const handleWhatsapp = () => {
    window.open("https://wa.me/50664040376", "_blank");
  };
  const handleCV = () => {
    window.open("./cv.pdf", "_blank");
  }
  const handleAmazon = () => {
    window.open("https://ecommerce-backend-aafqbaf5baeddjad.canadacentral-01.azurewebsites.net/","_blank");
  }
  const handlePortafolio = () => {
    window.open("https://portafolio-eua8cbbbg2dmfnb5.canadacentral-01.azurewebsites.net/","_blank");
  }
  
  return (
    <>
      <header>
        <div className="nombre-header">
            <h1 className="color-blanco">Heiner Andrés</h1>
        </div>
        <div className="menu-header">
          <div className="item-menu-header" 
          onClick= {() => handleScrollToSection(sectionInicioRef, 0)}
          style={{color: activo === 0 ? 'aquamarine' : 'white'}}> 
            <h2>Inicio</h2>
          </div>
          <div className="item-menu-header"  
          onClick= {() => handleScrollToSection(sectionInformacionRef, 1)}
          style={{color: activo === 1 ? 'aquamarine' : 'white'}}>
            <h2>Información</h2>
          </div>
          <div className="item-menu-header" 
          onClick= {() => handleScrollToSection(sectionExperienciaRef, 2)}
          style={{color: activo === 2 ? 'aquamarine' : 'white'}}>
            <h2>Experiencia</h2>
          </div>
          <div className="item-menu-header" 
          onClick= {() => handleScrollToSection(sectionProyectosRef, 3)}
          style={{color: activo === 3 ? 'aquamarine' : 'white'}}>
            <h2>Proyectos</h2>
          </div>
          <div className="item-menu-header" 
          onClick= {() => handleScrollToSection(sectionContactoRef, 4)}
          style={{color: activo === 4 ? 'aquamarine' : 'white'}}>
            <h2>Contacto</h2>
          </div>
        </div>
        <div className="social-header">
          <div onClick={handleLinkedin} className='item-social-header'><img className="puntero" src="/img/linkedin-redondo.png"/></div>
          <div onClick={handleGit} className='item-social-header'><img className="puntero" src="/img/git-redondo.png"/></div>
          <div onClick={handleWhatsapp} className='item-social-header'><img className="puntero" src="/img/whatsapp-redondo.png"/></div>
        </div>
      </header>

      <div style={ estiloFondoInicio } className='snap-section wrapper-informacion' ref={sectionInicioRef}>
        <div className="wrapper-letras-informacion">
          <h2 className="nombre-informacion">Heiner Andrés Solano Arguedas</h2>
          <p className="color-blanco titulo-principal">Ingeniero en Sistemas</p>
          <p className="subtitulo-principal">Desarrollador web y de aplicaciones</p>
          <div className="wrapper-botones-informacion">
            <button onClick={handleCV} className="btn-descargarCV">Descargar CV</button>
            <button className="btn-contacto" onClick= {() => handleScrollToSection(sectionContactoRef, 4)}>Contacto</button>
          </div>
        </div>
        <div className="wrapper-tarjeta-informacion">
          <div style={ estiloFondoTarjeta } onClick={ cambiarFondo }className="background-tarjeta-contacto">
              <div className="capa-borrosa">
                <div className="wrapper-izquierda-tarjeta-contacto">
                  <div className="wrapper-img-tarjeta-contacto">
                    <img className="img-tarjeta-contacto" src="/img/workstation-blanco.png"/>
                  </div>
                  <p>Desarrollo web y de aplicaciones</p>
                </div>
                <div className="wrapper-derecha-tarjeta-contacto">
                  <div className="linea-divisoria"></div>
                  <div className="wrapper-informacion-tarjeta-contacto">
                    <div className="fz-10 wrapper-columna-tarjeta-contacto">
                      <p>Heiner Andrés Solano Arguedas</p>
                    </div>
                    <div className="wrapper-columna-tarjeta-contacto">
                      <div className="wrapper-icono-tarjeta-contacto">
                        <img src="/img/correo.png"/>
                      </div>
                      <p>heiner.andres@outlook.com</p>
                    </div>
                    <div className="wrapper-columna-tarjeta-contacto">
                      <div className="wrapper-icono-tarjeta-contacto">
                        <img src="/img/telefono.png"/>
                      </div>
                      <p>+506 64040376</p>
                    </div>
                    <div className="wrapper-columna-tarjeta-contacto">
                      <div className="wrapper-icono-tarjeta-contacto">
                        <img src="/img/location.png"/>
                      </div>
                      <p>Heredia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-click-me">
              <img src="/img/click.png" />
              <p className="color-blanco">Click aquí</p>
            </div>
        </div>
      </div>


      <div  style={ estiloFondo }  className="snap-section wrapper-perfil" ref={sectionInformacionRef}>   
        <div className="title-wrapper">
          <p>Información</p>
        </div>
        <div className="description-main-wrapper">
          <div className="perfil-cards">
            <div className="card-header">
              <div className="icon-card-header">
                <div className="div-border-rounded">
                  <img className="img-card-header" src="/img/usuario.png"/>
                </div>
              </div>
              <div className="title-card-header">
                <p>¿Quién soy?</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-text-wrapper">
                <p>Ingeniero en Sistemas desarrollo de aplicaciones web y móviles. Me dedico a crear soluciones tecnológicas eficientes y escalables. Cuento con experiencia en entornos frontend y backend, con enfoque hacia la mejora continua y el impacto tangible en los resultados del negocio...</p>
              </div>
            </div>
          </div>
          <div className="perfil-cards">
            <div className="card-header">
              <div className="icon-card-header">
                <div className="div-border-rounded">
                  <img className="img-card-header" src="/img/perfil.png"/>
                </div>
              </div>
              <div className="title-card-header">
                <p>Perfil</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-text-wrapper">
                <p>Soy una persona que dedica su tiempo al aprendizaje de tecnologías, con capacidad para adaptarse en los entornos y trabajar en equipo, ofrecemos la mejor solución a los problemas tecnológicos, atención al detalle y compromiso con la entrega de productos de calidad.</p>
              </div>

            </div>
          </div>
          <div className="perfil-cards">
            <div className="card-header">
              <div className="icon-card-header">
                <div className="div-border-rounded">
                  <img className="img-card-header" src="/img/startup.png"/>
                </div>
              </div>
              <div className="title-card-header">
                <p>Objetivo</p>
              </div>
            </div>
            <div className="card-body">
              <div className="card-text-wrapper">
                <p>Mi objetivo es seguir aprendiendo y aplicar conocimientos, abarcar áreas como la ciberseguridad y la inteligencia artificial.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="habilities-wrapper">
          <div className="background-habilities">
            <div className="wrapper-title-habilities">
              <p>Habilidades Técnicas</p>
            </div>
            <div className="wrapper-habilities">
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/html.png"/>
                </div>
                <p>HTML</p>

              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/css.png"/>
                </div>
                <p>CSS</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/javascript.png"/>
                </div>
                <p>Javascript</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/react.png"/>
                </div>
                <p>React</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/nodejs.png"/>
                </div>
                <p>Node js</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/mongodb.png"/>
                </div>
                <p>Mongo BD</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/csharp.png"/>
                </div>
                <p>C#</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/sqlserver2.png"/>
                </div>
                <p>SQL Server</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/android3.png"/>
                </div>
                <p>Android Studio</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/git-tecnologia.png"/>
                </div>
                <p>Git</p>
              </div>
              <div className="wrapper-tecnologies">
                <div className="wrapper-img-tecnology">
                  <img className="img-tecnology" src="/img/azure.png"/>
                </div>
                <p>Azure</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div  style={ estiloFondo } className="snap-section wrapper-experiencia" ref={sectionExperienciaRef}>
        <div className="wrapper-title-experiencia">
          <p>Experiencia</p>
        </div>
        <div className="wrapper-body-experiencia">
          <div className="wrapper-cuadro-izquierda">
          <div className="cuadro-izquierda">
          <table className="table-izquierda">
              <tr>
                <th className="color-celeste">Proyecto</th>
                <th className="color-celeste">Empresa</th>
                <th className="color-celeste">Fecha</th>
                <th className="color-celeste">Tecnologías</th>
              </tr>
              <tr>
                <td>Portafolio</td>
                <td>Proyecto Individual</td>
                <td className="columna-ancha">2025</td>
                <td>React, Html & css, Javascript, css responsive</td>
              </tr>
              <tr>
                <td>Amazon</td>
                <td>Proyecto Individual</td>
                <td>2024</td>
                <td>React, Javascript, Node.js, Mongo, Firebase, Html & css</td>
              </tr>
              <tr>
                <td>INS</td>
                <td>Novacomp</td>
                <td>2022</td>
                <td>C#, Windows Forms, WCF, TFS, Sql Server, Azure, Git</td>
              </tr>
              <tr>
                <td>Banco Nacional</td>
                <td>Novacomp</td>
                <td>2022</td>
                <td>C#, Windows Forms, WCF, TFS, Sql Server, Azure, Git</td>
              </tr>
              <tr>
                <td>CNE</td>
                <td>Grupo Babel</td>
                <td>2021</td>
                <td>C#, MVC, Rest api, Git, Azure, Sql Server</td>
              </tr>
              <tr>
                <td>CCSS</td>
                <td>Grupo Babel</td>
                <td>2021</td>
                <td>C#, MVC, Rest api, Git, Azure, Sql Server</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="wrapper-cuadro-derecha">
          <div className="cuadro-derecha">
            <table className="table-derecha">
              <tr>
                <th className="color-celeste">Proyecto</th>
                <th className="color-celeste">Empresa</th>
                <th className="color-celeste">Fecha</th>
                <th className="color-celeste">Tecnologías</th>
              </tr>
              <tr>
                <td>Banco Popular</td>
                <td>Grupo Babel</td>
                <td className="columna-ancha">2020</td>
                <td>C#, MVC, Rest api, Git, Azure, Sql server</td>
              </tr>
              <tr>
                <td>ACH Citibank</td>
                <td>ODS</td>
                <td>2018</td>
                <td>C#, MVC, Html & css, WCF, Javascript, Sql Server</td>
              </tr>
              <tr>
                <td>Production Support</td>
                <td>ODS</td>
                <td>2017</td>
                <td>C#, MVC, Html & css, WCF, Javascript, Sql Server</td>
              </tr>
              <tr>
                <td>Panama Canal CitiBank</td>
                <td>ODS</td>
                <td>2017</td>
                <td>C#, MVC, Html & css, WCF, Javascript, Sql Server</td>
              </tr>
              <tr>
                <td>Ecommerce</td>
                <td>Seidor</td>
                <td>2016</td>
                <td>Html & css, Javascript, PHP, Java, Python, Sql Server</td>
              </tr>
              <tr>
                <td>WM Gutis</td>
                <td>Seidor</td>
                <td>2015</td>
                <td>Android Studio, Python, Html & css, Javascript, Sql Server</td>
              </tr>
            </table>

          </div>

        </div>
        </div>
      </div>
      <div  style={ estiloFondo }  className="snap-section wrapper-proyectos" ref={sectionProyectosRef}>
        <div className="wrapper-title-projects">
          <p>Proyectos</p>
        </div>
        <div className="wrapper-body-projects">
          <div className="wrapper-project-up">
            <div className="wrapper-project-up-left">
              <div onClick={handleAmazon} className="wrapper-project-background">
                <div className="wrapper-project-image">
                  <img src="/img/amazon.PNG" />
                </div>
                <div className="wrapper-project-text">
                  <div className="wrapper-project-margin-text">
                    <p className="bold">Copia de Amazon</p>
                    <p className="project-text">Proyecto para poner en práctica react, nodejs y mongo, funcionalidades como registro y autenticación con Google, lista de productos, detalle de productos, manejo de las cantidades disponibles de productos, carrito de compras para agregar productos, editar los productos, calcular el subtotal. Registrarse con un correo y una contraseña inventados. prueba@prueba.com por ejemplo.</p>
                    <p className="technologies-text-project">Html & css, react, javascript, nodejs, mongodb</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-project-up-right">
              <div onClick={handleLinkedin} className="wrapper-project-background">
                <div className="wrapper-project-image">
                  <img src="/img/fs.jpg" />
                </div>
                <div className="wrapper-project-text">
                  <div className="wrapper-project-margin-text">
                    <p className="bold">Desarrollo web y de aplicaciones</p>
                    <p className="project-text"></p>
                    <p className="technologies-text-project"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-project-down">
            <div className="wrapper-project-down-left">
              <div onClick={handlePortafolio} className="wrapper-project-background">
                <div className="wrapper-project-image">
                  <img src="/img/portafoliov1.PNG" />
                </div>
                <div className="wrapper-project-text">
                  <div className="wrapper-project-margin-text">
                    <p className="bold">Portafolio</p>
                    <p className="project-text">Proyecto para mostrar información, experiencia, proyectos.</p>
                    <p className="technologies-text-project">Html & css, javascript, react, diseño responsive</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-project-down-right">
              <div className="wrapper-project-background">
                <div className="wrapper-project-image">
                  <img src="/img/portafoliov2.PNG" />
                </div>
                <div className="wrapper-project-text">
                  <div className="wrapper-project-margin-text">
                    <p className="bold">Portafolio</p>
                    <p className="project-text">Proyecto para mostrar información, experiencia, proyectos.</p>
                    <p className="technologies-text-project">Html & css, javascript, react, diseño responsive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  style={ estiloFondo } className="snap-section wrapper-contacto" ref={sectionContactoRef}>
        <div className="wrapper-title-contacto">
          <p>Trabajemos Juntos</p>
        </div>
        <div className="wrapper-body-contacto">
          <div className="wrapper-texto-contacto">
            <div className="background-texto-contacto">
              <p>Estoy disponible para participar en proyectos acordes con las tecnologías que permitan aportar con soluciones eficientes e innovadoras. Si considera que mi perfil se ajusta a las necesidades de su equipo o iniciativa, será un gusto conversar sobre posibles formas de colaboración. Estoy disponible también para proyectos freelance o por contrato.</p>
            </div>
          </div>
          <div className="wrapper-tarjeta-contacto">
            <div onClick= {() => handleScrollToSection(sectionInicioRef, 0)} style={ estiloFondo }   className="background-tarjeta-contacto">
              <div className="capa-borrosa">
                <div className="wrapper-izquierda-tarjeta-contacto">
                  <div className="wrapper-img-tarjeta-contacto">
                    <img className="img-tarjeta-contacto" src="/img/workstation-blanco.png"/>
                  </div>
                  <p>Desarrollo web y de aplicaciones</p>
                </div>
                <div className="wrapper-derecha-tarjeta-contacto">
                  <div className="linea-divisoria"></div>
                  <div className="wrapper-informacion-tarjeta-contacto">
                    <div className="fz-10 wrapper-columna-tarjeta-contacto">
                      <p>Heiner Andrés Solano Arguedas</p>
                    </div>
                    <div className="wrapper-columna-tarjeta-contacto">
                      <div className="wrapper-icono-tarjeta-contacto">
                        <img src="/img/correo.png"/>
                      </div>
                      <p>heiner.andres@outlook.com</p>
                    </div>
                    <div className="wrapper-columna-tarjeta-contacto">
                      <div className="wrapper-icono-tarjeta-contacto">
                        <img src="/img/telefono.png"/>
                      </div>
                      <p>+506 64040376</p>
                    </div>
                    <div className="wrapper-columna-tarjeta-contacto">
                      <div className="wrapper-icono-tarjeta-contacto">
                        <img src="/img/location.png"/>
                      </div>
                      <p>Heredia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
