import { Button, Link } from "@mui/material";
import "./App.css";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { RepositoryData } from "./models/RepositoryData";
import RepositoryCard from "./components/RepositoryCard";
import ActivityCards from "./components/ActivityCards";
import Footer from "./components/Footer";

function App() {
  const hyperlinks = [
    "bptiago123@gmail.com",
    "github.com/bptiago",
    "linkedin.com/in/bptiago/",
  ];
  const [repos, setRepos] = useState<RepositoryData[]>([]);
  const [cardsCounter, setCounter] = useState(3);
  const [loadMoreCardsButton, setButton] = useState(true);

  function loadMoreCards() {
    if (cardsCounter >= repos.length - 1) setButton(false);
    else setCounter(cardsCounter + 3);
  }

  useEffect(() => {
    axios
      .get("https://api.github.com/users/bptiago/repos")
      .then((res) => setRepos(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <main id="layout" className="gap-24">
        <section id="home">
          <h1 className="text-xl font-bold highlight-color uppercase">
            Olá, meu nome é Tiago
          </h1>
          <h1 className="text-5xl sm:text-8xl font-semibold mt-1">
            Este é meu portfolio.
          </h1>
          <p className="text-xl sm:text-2xl font-light mt-8">
            Sou estudante de Sistemas de Informação na PUCPR e busco construir
            aplicações interativas e eficientes.
            <br></br>
            Gosto de desafios e sou motivado pela minha curiosidade.
          </p>
        </section>

        <section className="contact-layout" id="contato">
          <div className="contact-div rounded-xl">
            <CodeBlock />
          </div>
          <div className="w-1/3 text-xl flex flex-col gap-y-2 contact-text">
            <h2 className="w-max highlight-color uppercase tracking-wider hover:tracking-widest transition-all size-fit">
              Fale comigo
            </h2>
            {hyperlinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.includes("@") ? "#" : `https://www.${link}`}
                  underline="hover"
                  color="textPrimary"
                  className="hover:tracking-wide transition-all"
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </section>

        <section id="atividade">
          <h1 className="lowercase text-center  font-semibold text-3xl mb-3">
            <span className="highlight-color text-3xl">/</span>atividade
          </h1>
          <p className="text-center tertiary-color text-lg font-thin">
            Algumas experiências que tive...
          </p>
          <ActivityCards />
        </section>

        <section id="projetos" className="w-4/5 mx-auto">
          <h1 className="lowercase text-center  font-semibold text-3xl mb-3">
            <span className="highlight-color text-3xl">/</span>projetos
          </h1>
          <p className="text-center tertiary-color text-lg font-thin">
            Algumas coisas que construí no passado...
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
            {repos.map((repo, i) => {
              if (i < cardsCounter)
                return (
                  <RepositoryCard
                    description={repo.description}
                    title={repo.name}
                    url={repo.html_url}
                    key={i}
                  />
                );
            })}
          </div>
          {loadMoreCardsButton ? (
            <Button
              variant="outlined"
              onClick={loadMoreCards}
              sx={{ margin: "auto", display: "block", marginTop: "2rem" }}
            >
              carregar mais
            </Button>
          ) : (
            ""
          )}
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
