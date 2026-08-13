import { Motion } from "./Motion";

const projects = [
  ["01", "The Wellness Club", "Bienestar", "/pilates-studio.webp", "p1"],
  ["02", "Abogada independiente", "Derecho", "/wellness-team-01.webp", "p2"],
  ["03", "Estudio jurídico", "Servicios profesionales", "/wellness-pilates-02.webp", "p3"],
  ["04", "Arquitecta", "Arquitectura", "/wellness-team-03.webp", "p4"],
  ["05", "Consultorio de psicología", "Salud", "/wellness-team-04.webp", "p5"],
  ["06", "Estudio contable", "Finanzas", "/wellness-team-02.webp", "p6"],
];

export default function Home() {
  return <main>
    <Motion />
    <header className="topbar">
      <nav aria-label="Navegación principal"><a href="#trabajos">Proyectos</a><a href="#estudio">Estudio</a><a href="#servicios">Servicios</a></nav>
      <div className="top-note">Presencia digital para profesionales</div>
      <nav className="social" aria-label="Contacto"><a className="contact-pill" href="#contacto">Contactar ↗</a></nav>
    </header>

    <section className="masthead" id="inicio"><h1>TRAYECTORIA</h1></section>

    <section className="featured" aria-label="Proyecto destacado: The Wellness Club">
      <img src="/pilates-studio.webp" alt="Clase de Pilates en The Wellness Club" />
      <div className="featured-shade" />
      <div className="featured-copy"><span>№ 01 — PROYECTO EN DESARROLLO</span><h2>The Wellness<br />Club</h2><p>Una presencia digital para un espacio de movimiento, bienestar y comunidad.</p><a href="#trabajos">Ver proyecto →</a></div>
      <div className="featured-meta"><span>Bienestar</span><span>Sitio web — 2026</span></div>
    </section>

    <section className="work" id="trabajos">
      <div className="work-head"><div><p><span>§</span> PROYECTOS</p><h2>Hacemos visible lo que construiste.</h2></div></div>
      <div className="work-grid">
        {projects.map(([index,name,type,image,position], order) => <article className="work-card reveal" style={{"--delay": `${(order % 3) * 100}ms`} as React.CSSProperties} key={index}>
          <div className={`card-visual ${position}`}><img src={image} alt="" /><span className="image-index">№ {index}</span><span className="image-arrow">↗</span></div>
          <div className="card-meta"><h3>{name}</h3><p>{type}</p><span>Ver →</span></div>
        </article>)}
      </div>
      <a className="more-work" href="#mas-proyectos">Ver más proyectos ↓</a>
      <p className="work-disclaimer">↳ Proyectos reales y exploraciones conceptuales en desarrollo.</p>
    </section>

    <section className="photo-story" id="mas-proyectos" aria-label="Exploración visual de The Wellness Club">
      <div className="photo-story-head reveal"><span>THE WELLNESS CLUB — EN PROCESO</span><p>Una identidad se construye<br />con imágenes, ritmo y detalle.</p></div>
      <figure className="story-large reveal"><img src="/wellness-team-01.webp" alt="Equipo de The Wellness Club" /></figure>
      <div className="story-pair"><figure className="reveal"><img src="/wellness-pilates-02.webp" alt="Práctica de Pilates" /></figure><figure className="reveal"><img src="/wellness-team-04.webp" alt="Equipo en el estudio" /></figure></div>
    </section>

    <section className="manifesto" id="estudio"><p>§ POR QUÉ TRAYECTORIA</p><h2 className="reveal">Tu trayectoria merece<br />una presencia digital<br />a la altura.</h2><div className="manifesto-body reveal"><p>Una persona estudia, se forma, se especializa, ejerce y construye una reputación. Diseñamos el lugar digital capaz de representar ese recorrido con claridad, criterio y una identidad propia.</p></div></section>

    <section className="services" id="servicios"><div className="service-title"><span>§ QUÉ HACEMOS</span><h2 className="reveal">Diseño humano.<br />Tecnología invisible.<br />Presencia propia.</h2><figure className="service-photo reveal"><img src="/wellness-team-03.webp" alt="Trabajo y comunidad en The Wellness Club" /></figure></div><div className="service-list">
      <article className="reveal"><span>№ 01</span><h3>Dirección y diseño</h3><p>Transformamos tu recorrido en una identidad digital precisa y contemporánea.</p></article>
      <article className="reveal"><span>№ 02</span><h3>Contenido y estructura</h3><p>Ordenamos servicios, experiencia, proyectos e información para que se comprendan con facilidad.</p></article>
      <article className="reveal"><span>№ 03</span><h3>Desarrollo y publicación</h3><p>Construimos un sitio rápido, adaptable y preparado para personas, buscadores y nuevas herramientas digitales.</p></article>
    </div></section>

    <section className="process"><p>EL RECORRIDO</p><ol><li className="reveal"><span>№ 01</span>Conversamos</li><li className="reveal"><span>№ 02</span>Diseñamos</li><li className="reveal"><span>№ 03</span>Revisamos</li><li className="reveal"><span>№ 04</span>Publicamos</li></ol></section>

    <section className="closing" id="contacto"><p className="reveal">Hagamos visible<br />lo que construiste.</p><a href="mailto:hola@tusitio.com">Hablemos ↗</a></section>
    <footer><b>TRAYECTORIA</b><span>Buenos Aires — Argentina</span><span>© 2026</span></footer>
  </main>;
}
