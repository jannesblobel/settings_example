import "./App.css";
import { Trans } from "react-i18next";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <p>
            {t("arable_topical_halibut_absorb")} <code>{t("src_app")}</code>{" "}
            {t("broad_stock_alligator_roar")}.
          </p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>{t("male_level_lemur_peel")}</div>
          <div>{t("wacky_cool_fish_bend")} </div>
        </a>
      </header>
    </div>
  );
}

export default App;
