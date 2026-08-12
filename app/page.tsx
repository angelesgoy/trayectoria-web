const projects = [
  ["01", "Estudio de Pilates", "Bienestar", "lime"],
  ["02", "Abogada independiente", "Derecho", "blue"],
  ["03", "Estudio jurídico", "Servicios profesionales", "stone"],
  ["04", "Arquitecta", "Arquitectura", "coral"],
  ["05", "Consultorio de psicología", "Salud", "lilac"],
  ["06", "Estudio contable", "Finanzas", "sand"],
  ["07", "Nutricionista", "Salud y bienestar", "green"],
  ["08", "Odontología", "Salud", "ice"],
  ["09", "Consultora", "Estrategia", "yellow"],
];

function MiniSite({ name, index }: { name: string; index: string }) {
  return <div className="site-frame"><div className="site-top"><span>{name}</span><span>MENÚ</span></div><div className="site-copy"><small>PROYECTO {index}</small><b>{name}</b><i /><i /><em>CONOCER MÁS →</em></div><div className="site-shape" /></div>;
}

export default function Home() {
  return <main>
    <header className="topbar">
      <nav><a href="#trabajos">Proyectos</a><a href="#estudio">Estudio</a><a href="#servicios">Servicios</a></nav>
      <div className="top-note">Presencia digital para profesionales</div>
      <nav className="social"><a href="#">Instagram</a><a href="#">LinkedIn</a><a className="contact-pill" href="#contacto">Contactar ↗</a></nav>
    </header>

    <section className="masthead" id="inicio"><h1>TRAYECTORIA</h1></section>

    <section className="featured" aria-label="Proyecto destacado: Estudio de Pilates">
      <div className="featured-copy"><span>01 / PROYECTO EN DESARROLLO</span><h2>Estudio<br />de Pilates</h2><p>Movimiento, bienestar y comunidad en una presencia digital clara.</p></div>
      <div className="featured-lines"><i /><i /><i /><b>PILATES</b></div>
      <div className="featured-meta"><span>Bienestar</span><span>Sitio web · 2026</span></div>
    </section>

    <section className="work" id="trabajos">
      <div className="work-head"><p>Proyectos y exploraciones</p><p>Nueve maneras de presentar una trayectoria.<br /><span>Conceptos en desarrollo.</span></p></div>
      <div className="work-grid">
        {projects.map(([index,name,type,tone]) => <article className={`work-card ${tone}`} key={index}>
          <div className="card-visual"><MiniSite name={name} index={index} /></div>
          <div className="card-meta"><h3>{name}</h3><p>{type}</p><span>{index}</span></div>
        </article>)}
      </div>
    </section>

    <section className="manifesto" id="estudio"><p>TRAYECTORIA / ESTUDIO DIGITAL</p><h2>Tu trabajo habla de vos.<br />Tu presencia también.</h2><div><p>Diseñamos el lugar digital donde una persona puede presentar quién es, qué hace, qué experiencia tiene y cómo contactarla.</p><p>Una fuente propia, clara y confiable para personas, buscadores y nuevas herramientas digitales.</p></div></section>

    <section className="services" id="servicios"><div className="service-title"><span>Lo que hacemos</span><h2>Presencias digitales<br />a la altura de tu trabajo.</h2></div><div className="service-list">
      <article><span>01</span><h3>Dirección y diseño</h3><p>Ordenamos tu recorrido y construimos una identidad digital precisa.</p></article>
      <article><span>02</span><h3>Contenido y estructura</h3><p>Presentamos servicios, experiencia y proyectos con claridad.</p></article>
      <article><span>03</span><h3>Desarrollo y publicación</h3><p>Un sitio rápido, adaptable y listo para ser encontrado.</p></article>
    </div></section>

    <section className="process"><p>EL PROCESO</p><ol><li><span>01</span>Conversamos</li><li><span>02</span>Diseñamos</li><li><span>03</span>Revisamos</li><li><span>04</span>Publicamos</li></ol></section>

    <section className="closing" id="contacto"><p>¿Tu presencia representa<br />lo que construiste?</p><a href="mailto:hola@tusitio.com">Hablemos ↗</a></section>
    <footer><b>TRAYECTORIA</b><span>Buenos Aires · Argentina</span><span>© 2026</span></footer>
  </main>;
}
