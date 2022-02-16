import { useQuery, gql } from "@apollo/client";
const GET_ARTICLES_FILTERED_STORY = gql`
  {
    articles(
      filters: {
        category: { name: { eq: "story" } }
        title: { notContains: "Notre histoire" }
      }
    ) {
      data {
        id
        attributes {
          title
          content
        }
      }
    }
    article(id: 3) {
      data {
        id
        attributes {
          title
          content
          img {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GET_ARTICLES_FILTERED_HOME = gql`
  {
    articles(filters: { category: { name: { eq: "home" } } }) {
      data {
        id
        attributes {
          title
          content
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }

    article(id: 7) {
      data {
        attributes {
          title
          content
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    partenaires {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    partenaires {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GET_PRICES = gql`
  {
    prices {
      data {
        attributes {
          title_card
          content {
            title_prestation
            content_prestation
            content_prestation2
            price
            price2
          }
        }
      }
    }
  }
`;
const GET_HOURS = gql`
  query {
    hours {
      data {
        id
        attributes {
          day
          open_hours
          closed_hours
        }
      }
    }
  }
`;
export const useQueryStory = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES_FILTERED_STORY);

  return { loading, error, data };
};
export const useQueryHome = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES_FILTERED_HOME);

  return { loading, error, data };
};
export const useQueryPrice = () => {
  const { loading, error, data } = useQuery(GET_PRICES);

  return { loading, error, data };
};
export const useQueryHours = () => {
  const { loading, error, data } = useQuery(GET_HOURS);

  return { loading, error, data };
};
