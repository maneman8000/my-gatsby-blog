import React from 'react'
import Layout from '../components/Layout'

class Profile extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        これは Profile ページ
      </Layout>
    )
  }
}

export default Profile;