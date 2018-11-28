'use strict'

import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Modal from '../components/Modal'



export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const idPodcast = query.id

    const reqPodcast = await fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`)

    const { body: { audio_clip } } = await reqPodcast.json()

    return {
      audio_clip
    }
  }

  render () {
    const { audio_clip } = this.props

    return (
      <Layout title={ audio_clip.title }>

        <Modal audio_clip = { audio_clip }></Modal>

      </Layout>
    )
  }
}
