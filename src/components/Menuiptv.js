import { Link, StaticQuery, graphql } from "gatsby";
import React from "react"


export default () => (
    <StaticQuery
        query={graphql
        `
            {
                allNavMenuJson(sort: {fields: weight}, filter: {p1: {eq: 1954}, p3: {eq: 0}}) {
                    edges {
                      node {
                        link_title
                        p1
                        p2
                        weight
                        depth
                        link_path
                      }
                    }
                  }
            }
        `}
        render={({ allNavMenuJson: { edges } }) => (
            <ul>
                {edges.map(({ node: { link_title, link_path, p1 } }) => (
                    <li key={p1}>
                    <Link to={link_path}>{link_title}</Link>
                    </li>
                ))}
            </ul>
        )}
    />
);
