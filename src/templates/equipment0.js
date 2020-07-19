import { graphql } from "gatsby"
import React from "react"
//import Img from "gatsby-image"

//import Container from "../components/container"
//import { rhythm } from "../utils/typography"
//import constants from "../utils/constants"

//gatsby version:
// import Header from "../components/header"
// import Layout from "../components/layout"
//
// const EquipmentTemplate = ({ data }) => (
//   <Layout>
//   <Header />
//   <h1>{data.equipment.title}</h1>
//   <div dangerouslySetInnerHTML={{ __html: data.equipment.body.value }}></div>
// </Layout>
// )
//
// export default EquipmentTemplate
//
//
// export const query =  graphql
// `
//   query($url: String!) {
//     equipment: node0Json(url: {eq: $url}) {
//      url
//      title
//      body {
//        value
//       }
//     }
//   }
// `
//__________________

import Header from "../components/Header";
import Footer from "../components/Footer";


const EquipmentTemplate = ({ data }) => (
  <>
  <Header></Header>
  <div className="page node_page">
     <div className="container" dangerouslySetInnerHTML={{ __html: data.equipment.body.value }}>
    </div>
  </div>
  <Footer></Footer>
  </>
)

export default EquipmentTemplate


export const query =  graphql
`
  query($url: String!) {
    equipment: node0Json(url: {eq: $url}) {
     url
     title
     body {
       value
      }
    }
  }
`
