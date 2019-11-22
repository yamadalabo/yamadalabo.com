import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigator from "../components/navigator"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="app">
      <Navigator />
      <div className="content">
        <section className="post">
          <div className="post__header">
            <h1>Business and Soul Research</h1>
          </div>
          <div className="post__body">
            <p>
              山田仁一郞
              <br />
              大阪市立大学大学院経営学研究科 教授
              <br />
              アントレプレナーシップ論・経営戦略論・組織論
            </p>
            <p>
              Yamada Jin-ichiro
              <br />
              Graduate School of Business, Osaka City Univ. (Professor)
              <br />
              Entrepreneurship / Strategy / Organizational Theory
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
