export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div>
          <a href="https://my-simple-note.netlify.app/">
            <img src="/img/notes.jpg" alt="notes" />
          </a>
          <p>Notes</p>
        </div>
        <div>
          <a href="https://aleksei-p.github.io/weather/">
            <img src="/img/weather.jpg" alt="weather" />
          </a>
          <p>Weather</p>
        </div>
        <div>
          <a href="https://aleksei-p.github.io/portland-portland/">
            <img src="/img/portland.jpg" alt="portland" />
          </a>
          <p>From Portland to Portland</p>
        </div>
      </div>
    </section>
  );
}
