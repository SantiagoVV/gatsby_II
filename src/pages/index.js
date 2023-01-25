import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

import Especie from "../components/Especie";
import Read_Api from "../components/Read_Api";

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          arrayAnimales {
            Reino
            Filo
            Clases
            Orden
            Familia
            Genero
            Especie
            Nombre
            RefTitulo
            RefNombre
            RefAno
            RefUbicacion
            link
            imagen
          }
        }
      }
    }
    allApiArticles {
      edges {
        node {
          body
          title
          userId
          id
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log("data", data.allDataJson.edges[0].node.arrayAnimales);
  console.log("data", data);
  const species = data.allDataJson.edges[0].node.arrayAnimales;
  const var_x = data.allApiArticles.edges;
  return (
    <Layout>
      
      <p style={{ fontSize: "1.5rem" }}>Animales Autóctonos de Canarias</p>
      <div style={{ display: "grid", gridAutoFlow: "column" }}>
        {species.map((specie, id) => (
          <Especie key={specie.id} specie={specie} />
        ))}
      </div>
      <p></p>
      <p></p>
    
      <p style={{ fontSize: "1.5rem" }}>
       API proporcionada en la práctica.
      </p>
      <div style={{ display: "grid", gridAutoFlow: "column" }}>
        {var_x.slice(0, 3).map((x, id) => (
          <Read_Api key={x.node.id} var_x={x.node} />
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
