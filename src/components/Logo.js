import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle` 
  @media only screen and (max-width: 400px) {
    .logo {
      display: "block !important";
      width: "70% !important";
      height: "auto !important";
      margin-left: "auto !important";
    }
  }
  
`

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpLogo {
            url {
              source_url
            }
          }
        }
      `}
      render={data => (
        <img
          src={data.wordpressWpLogo.url.source_url}
          alt="logo"
          className="logo"
          style={{ padding: "1rem 0" }}
        />
      )}
    />
  )
}

export default Logo
