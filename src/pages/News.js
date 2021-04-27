import '../styles/global.css';
import '../styles/news.css';

export default function News() {
  return (
    <main>
      <form action="" method="post" id="form-news">
        <fieldset className="form-news">
          <div className="textform">
            Faça parte da nossa lista de e-mails para não perder nenhuma
            novidade!
          </div>

          <div className="inputs">
            <label for="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required
            />

            <label for="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Endereço de email"
              required
            />

            <button id="button-submit" type="submit">
              Eu quero ficar por dentro
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
