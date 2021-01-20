import 'antd/dist/antd.less'
import '../../../styles/components/modal.less'

import { Modal } from 'antd'
import { useState } from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player/youtube'

const CustomModal = ({ content }) => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Modal
      visible={isVisible}
      onOk={() => {
        setIsVisible(false)
      }}
      onCancel={() => {
        setIsVisible(false)
      }}
    >
      <div className="header">
        <strong>{content.titles.en || content.titles.en_jp}</strong>
      </div>
      <div className="body">
        <div className="linkTrailer">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${content.youtubeVideoId}`}
            controls={true}
            width={400}
            height={224.88}
          />
        </div>
        <p>{content.synopsis}</p>
      </div>
    </Modal>
  )
}

CustomModal.propTypes = {
  content: PropTypes.object.isRequired
}

export default CustomModal
