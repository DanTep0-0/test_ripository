const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return  graphql(
    `
      {
        allNode0Json {
          edges {
            node {
              url
            }
          }
        }
        allNode1Json {
          edges {
            node {
              url
            }
          }
        }
      }
    `
  ).then(result => {
      result.data.allNode0Json.edges.forEach(({ node }) => {
        createPage({
          path: node.url,
          component: path.resolve(`./src/templates/equipment0.js`),
          context: {
            url: node.url.split(".")[0],
          },
        })
      });
      result.data.allNode1Json.edges.forEach(({ node }) => {
        createPage({
          path: node.url,
          component: path.resolve(`./src/templates/equipment1.js`),
          context: {
            url: node.url.split(".")[0],
          },
        })
      });

      // result.data.allSitePage.nodes.forEach(({ node }) => {
      //   createPage({
      //     path: node.path.split("/")[1],
      //     component: path.resolve(`./src/pages/` + node.path.split("/")[1] + ".js"),
      //   })
      // });

      createPage({
        path: "crt1081ird_s2_ip",
        component: path.resolve(`./src/pages_hard/crt1081ird_s2_ip_withdown_.js`)
      });

      createPage({
        path: "crt1081ird-s2-ip",
        component: path.resolve(`./src/pages_hard/crt1081ird-s2-ip_withup-.js`)
      });

    });

}
