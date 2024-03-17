import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { App } from '../components/App/App'

const IndexPage = () => (
  <Layout>
    <App />
  </Layout>
)

const styleCss = `
  html {
    height: 100%;
      }
  body {
    min-height: 100%;
      }
  main {
    min-height: 100%;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
      }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (<>
  <style type="text/css">
    {styleCss}
  </style>
  <Seo title="Home" />
</>)

export default IndexPage
