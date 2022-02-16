import React from "react";
import AboutBlock from "../components/AboutBlock";
import HeroHomePage from "../components/HeroHomePage";
import SectionNature from "../components/SectionNature";
import useChangeTitle from "../hooks/useChangeTitle";
import Loader from "../components/Loader";
import PropTypes from "prop-types";
import Partenaires from "../components/Partenaires";
import Page404 from "./Page404";
import { useQueryHome } from "../hooks/useQuery";
import Animate from "../components/Animate";

const Home = ({ title }) => {
  useChangeTitle(title);
  const { loading, error, data } = useQueryHome();
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const articles = data.articles.data;
  const heroArticle = data.article.data.attributes;
  const partenaires = data.partenaires.data[0].attributes.image.data;
  return (
    <section>
      <HeroHomePage
        heroSection={{
          title: heroArticle.title,
          content: heroArticle.content,
          img: heroArticle.img.data,
        }}
      />
      {articles.map(({ attributes }, index) => {
        const { title, content, img } = attributes;
        return (
          <div key={index}>
            {(index === 0 && (
              <Animate>
                <AboutBlock
                  AboutContent={{
                    title,
                    content,
                    img: img.data[0].attributes.url,
                  }}
                />
              </Animate>
            )) ||
              (index === 1 && (
                <Animate thresholdValue={0.3}>
                  <SectionNature
                    sectionContent={{
                      title,
                      content,
                    }}
                  />
                </Animate>
              ))}
          </div>
        );
      })}
      <Animate>
        <Partenaires data={partenaires} />
      </Animate>
    </section>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Home);
