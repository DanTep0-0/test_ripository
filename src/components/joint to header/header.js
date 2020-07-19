import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import React from "react"

export default () => (
  <div className="block header">
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { name: { eq: "crypton_logo" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={({
      allFile: {
        edges: [
          {
            node: { publicURL }
          }
        ]
      }
    }) => (
  <header
    style={{
      background: 'url(../images/t1-blue.png)',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: `0,0`,
    }}
  >
    <Link to="/">
      <img src={publicURL} alt="crypton_logo" width="120px" height="60px" />
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          background: 'url(..images/t2-blue.png)'
        }}
      >
        <h1>Оборудование для телевидения фирмы Криптон</h1>
      </div>
    </Link>
  </header>
    )}
    />
  </div>
  )
