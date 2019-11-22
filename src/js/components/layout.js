/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../../scss/style.scss";

const Layout = ({ children }) => {
  const { image } = useStaticQuery(graphql`
    query LogoQuery {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 53, height: 59) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <header>
        <Link id="go-back-home" to="/">
          <Img fixed={image.childImageSharp.fixed} />
        </Link>
        <p>Yamada Jin-ichiro Lab</p>
      </header>
      <div id="container">
        {children}
      </div>
      <footer>
        <a href="http://github.com/muan/scribble" class="muted">built with github.io using Scribble theme</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
