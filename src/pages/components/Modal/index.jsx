import 'antd/dist/antd.less'
import '../../../styles/components/modal.less'

import { Modal } from 'antd'
import { useState } from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player/youtube'

const CustomModal = ({ content }) => {
  const [isVisible, setIsVisible] = useState(true)

  console.log(typeof content === 'object')

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
        <strong>
          {content.attributes.titles.en || content.attributes.titles.en_jp}
        </strong>
      </div>
      <div className="body">
        <div className="linkTrailer">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${content.attributes.youtubeVideoId}`}
            controls={true}
            width={400}
            height={224.88}
          />
        </div>
        <p>{content.attributes.synopsis}</p>
      </div>
    </Modal>
  )
}

CustomModal.propTypes = {
  content: PropTypes.object.isRequired
}

export default CustomModal
