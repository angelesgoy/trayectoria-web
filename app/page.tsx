const projects = [
  {
    type: "Bienestar",
    name: "Estudio de Pilates",
    description: "Clases, horarios y una forma simple de hacer una consulta.",
    tone: "warm",
  },
  {
    type: "Servicios profesionales",
    name: "Abogada independiente",
    description: "Áreas de práctica, trayectoria y canales de contacto claros.",
    tone: "cool",
  },
  {
    type: "Estudio jurídico",
    name: "Práctica legal",
    description: "Una presentación sobria para generar confianza desde la primera búsqueda.",
    tone: "neutral",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="#inicio" aria-label="Inicio">Tu nombre</a>
        <nav aria-label="Navegación principal">
          <a href="#por-que">Por qué una web</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#proceso">Cómo trabajo</a>
        </nav>
        <a className="button button-small" href="#contacto">Hablemos</a>
      </header>

      <section className="hero shell" id="inicio">
        <p className="eyebrow">Sitios web para profesionales y comercios</p>
        <h1>Cuando te busquen,<br />que encuentren confianza.</h1>
        <p className="hero-copy">
          Creo sitios claros y profesionales para que tus futuros clientes entiendan
          quién sos, qué hacés y cómo contactarte.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contacto">Quiero conversar</a>
          <a className="text-link" href="#trabajos">Ver proyectos <span>↓</span></a>
        </div>
        <div className="browser" aria-label="Representación de una página profesional">
          <div className="browser-bar"><i /><i /><i /><span>tusitio.com</span></div>
          <div className="browser-body">
            <div className="browser-copy"><b>Tu actividad, explicada con claridad.</b><span /><span /><span className="short" /><button>Contacto</button></div>
            <div className="browser-visual"><div>Tu imagen<br />o tu trabajo</div></div>
          </div>
        </div>
      </section>

      <section className="problem" id="por-que">
        <div className="shell split">
          <div>
            <p className="eyebrow">El punto de partida</p>
            <h2>Tu cliente ya te está buscando.</h2>
          </div>
          <div className="large-copy">
            <p>Antes de escribirte, las personas buscan tu nombre, revisan tu actividad y comparan opciones.</p>
            <p>Una web reúne la información correcta en un lugar propio y la presenta de una forma que genera seguridad.</p>
          </div>
        </div>
        <div className="shell feature-grid">
          <article><span>01</span><h3>Explicá qué hacés</h3><p>Servicios, experiencia y especialidades sin depender de publicaciones sueltas.</p></article>
          <article><span>02</span><h3>Generá confianza</h3><p>Una presencia cuidada ayuda a que alguien dé el paso de contactarte.</p></article>
          <article><span>03</span><h3>Hacete encontrable</h3><p>Información ordenada para personas, buscadores y asistentes digitales.</p></article>
        </div>
      </section>

      <section className="projects shell" id="trabajos">
        <div className="section-heading">
          <div><p className="eyebrow">Proyectos</p><h2>Webs que estoy construyendo.</h2></div>
          <p>Estos primeros proyectos van a mostrar cómo adapto cada sitio a una actividad distinta.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.tone}`} key={project.name}>
              <div className="project-preview">
                <span className="mini-label">PROYECTO 0{index + 1}</span>
                <div className="mini-window"><i /><i /><b>{project.name}</b><span /><span /><em /></div>
              </div>
              <div className="project-info">
                <p>{project.type}</p><h3>{project.name}</h3><span>{project.description}</span>
                <small>EN DESARROLLO</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="proceso">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">El proceso</p><h2>Simple de principio a fin.</h2></div><p>No necesitás saber de diseño ni preparar todo por tu cuenta. Lo ordenamos juntos.</p></div>
          <ol>
            <li><span>1</span><div><h3>Conversamos</h3><p>Me contás sobre tu actividad, tus clientes y lo que necesitás comunicar.</p></div></li>
            <li><span>2</span><div><h3>Armo la propuesta</h3><p>Organizo la información y preparo una primera versión para que puedas verla.</p></div></li>
            <li><span>3</span><div><h3>Revisamos</h3><p>Ajustamos textos, imágenes y detalles hasta que te represente.</p></div></li>
            <li><span>4</span><div><h3>La publicamos</h3><p>Tu sitio queda listo para compartir, encontrar y recibir consultas.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="about shell">
        <p className="eyebrow">Sobre el servicio</p>
        <div className="split"><h2>Una presencia digital clara, sin complicaciones.</h2><div className="large-copy"><p>Trabajo con profesionales y negocios que necesitan una web sencilla, cuidada y fácil de mantener.</p><p>La tecnología y la inteligencia artificial aceleran el proceso. Mi trabajo es convertirlas en una solución que tenga sentido para vos.</p></div></div>
      </section>

      <section className="contact" id="contacto">
        <div className="shell contact-inner">
          <p className="eyebrow">¿Tenés una actividad para mostrar?</p>
          <h2>Podemos darle un lugar propio.</h2>
          <p>Contame brevemente a qué te dedicás y vemos si una web puede ayudarte.</p>
          <a className="button button-light" href="mailto:hola@tusitio.com">Escribime para conversar</a>
          <small>Sin compromiso · Respuesta personal</small>
        </div>
      </section>

      <footer className="shell"><span>Tu nombre — Diseño web</span><span>Argentina · 2026</span></footer>
    </main>
  );
}
