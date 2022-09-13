import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Sidenav from "../components/sidenav";
import { StaticImage } from "gatsby-plugin-image";

const StyledContent = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: auto;
  display: flex;
  flex-direction: column;

  aside {
    height: 100%;
    margin: 2rem 2rem 2rem 0;
    border-bottom: 1px solid #d4d4d4;
    text-align: center;
  }

  article {
    width: 100%;
    margin: 2rem 0 2rem 2rem;
  }

  section {
    width: 100%;
    margin-bottom: 3.5rem;
  }

  h3,
  li {
    margin-bottom: 0.625rem;
  }

  p {
    text-align: justify;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default function Index() {
  return (
    <Layout>
      <StyledContent id="content" className="container">
        <Sidenav links={navLinks} />
        <StyledMain>
          <aside>
            <StaticImage
              src="../images/elephant.webp"
              formats={["auto", "webp", "jpg"]}
              alt="elephant"
              placeholder="elephant"
              width={400}
              height={400}
            />
          </aside>
          <article>
            <section id="about">
              <h3>[#] À propos de moi</h3>
              <p>
                Après plus de 2 ans d'initiation personnelle au développement
                web sur mon temps libre. Je prépare prochainement une formation
                en téléprésentiel de 6 mois de "Développeur Web et Mobile" avec
                le centre de formation O'Clock.
              </p>
              <br />
              <p>
                Passionné par l'univers informatique dans sa multiplicité, j'ai
                acquis les fondamentaux nécessaire pour débuter le métier de
                développeur full stack. Durant mes deux années de vagabondage,
                où j'ai eu l'occasion de découvrir et mettre en pratique dans
                des projets/laboratoires personnels des langages de frontend, de
                backend et voir de devops !
              </p>
              <br />
              <p>
                Polyvalent, je maîtrise les différentes étapes techniques de la
                création d’un site ou d’une application web ; de l'analyse des
                besoins, à son développement frontend et du déploiement de
                seveur à la configuration backend, jusqu'à sa mise en
                production.
              </p>
            </section>
            <section id="skills">
              <h3>[#] Compétences Professionnelles</h3>
              <ul>
                <li>
                  <p>
                    Développement backend (Node.js | php) et frontend de sites
                    et applications web.
                  </p>
                </li>
                <li>
                  <p>
                    Analyse des besoins UI/UX et mise en place des tâches
                    inhérantes.
                  </p>
                </li>
                <li>
                  <p>Orchestration du déploiement grâce aux outils de CI/CD.</p>
                </li>
                <li>
                  <p>
                    Maintenance, correction de bugs et amélioration avec suivi
                    des issues/request.
                  </p>
                </li>
                <li>
                  <p>
                    Grande adaptabilité et capacité à travailler sur des sujets
                    divers.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisation d'outils de gestion du temps pour respecter des
                    délais.
                  </p>
                </li>
              </ul>
            </section>
            <section id="jobs">
              <h3>[#] Formations & expériences personnelles</h3>
              <ul>
                <li>
                  <p>09/2022 - 03/2023 (Actuellement)</p>
                  <strong>Formation Développeur Web et Mobile</strong>
                  <p>
                    Centre de formation en ligne{" "}
                    <a href="https://oclock.io/">O'Clock</a>
                  </p>
                </li>
                <li>
                  <p>1997 - 1999</p>
                  <strong>BTS Communication des Entreprises</strong>
                  <p>Lycée André Malraux (annexe), Béthune</p>
                </li>
                <li>
                  <p>1992 - 1997</p>
                  <strong>Baccalauréat Scientique (SVT)</strong>
                  <p>Lycée André Malraux, Béthune</p>
                </li>
              </ul>
            </section>
            <section id="projects">
              <h3>[#] Réalisations</h3>
            </section>
          </article>
        </StyledMain>
      </StyledContent>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Développeur web Full Stack junior | Page d'accueil</title>
    <meta
      name="description"
      content="Présentation de mon expérience et recherche d'un poste de Développeur Web Full Stack junior (HTML/CSS, JavaScript, PHP, Symfony, React...)"
    />
  </>
);

const navLinks = [
  {
    name: "À propos",
    url: "/#about",
  },
  {
    name: "Compétences",
    url: "/#skills",
  },
  {
    name: "Experience",
    url: "/#jobs",
  },
  {
    name: "Réalisations",
    url: "/#projects",
  },
];
