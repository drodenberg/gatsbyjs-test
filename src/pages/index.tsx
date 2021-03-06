import React from 'react'
import { Link } from 'gatsby'
import { Button, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        olKit
      </p>
      <h2>A geospatial component library built with React</h2>
      <p>
        This is a pointless link to this repo
        <a href="https://github.com/drodenberg/gatsbyjs-test">
        https://github.com/drodenberg/gatsbyjs-test
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button href="https://twitter.com/jannikbuschke" target="_blank">
          Twitter
          <Icon type="twitter" />
        </Button>
        <Button
          href="https://github.com/jannikbuschke/gatsby-antd-docs"
          target="_blank"
        >
          Github
          <Icon type="github" />
        </Button>
        <Button type="primary">
          <Link to="/docs/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
