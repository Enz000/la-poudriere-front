import React from "react";
import Block from "../components/Block";
import useChangeTitle from "../hooks/useChangeTitle";
import PropTypes from "prop-types";
import { useQueryStory } from "../hooks/useQuery";
import Page404 from "./Page404";
import Loader from "../components/Loader";
import HeroStoryPage from "../components/HeroStoryPage";
import Animate from "../components/Animate";
const Story = ({ title }) => {
  useChangeTitle(title);
  const { data, loading, error } = useQueryStory();
  if (loading) return <Loader />;
  if (error) return <Page404 />;
  const articles = data.articles.data;
  const {
    title: singleTitle,
    content: singleContent,
    img,
  } = data.article.data.attributes;

  return (
    <section>
      <HeroStoryPage
        heroStoryObject={{
          img,
          singleContent,
          singleTitle,
        }}
      />
      {articles.map(({ attributes }, index) => {
        const { title, content } = attributes;
        return (
          <Animate key={index}>
            <Block
              block={{
                title,
                content,
                index,
              }}
            />
          </Animate>
        );
      })}
    </section>
  );
};

Story.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Story);
