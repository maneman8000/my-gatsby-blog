import React from 'react'
import Layout from '../components/Layout'

class Work extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        これは Work ページ
      </Layout>
    )
  }
}

export default Work;