import 'antd/dist/antd.less'
import '../../../styles/components/modal.less'

import { Modal } from 'antd'
import { useState } from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player/youtube'

const CustomModal = ({ key, visible, contentTest }) => {
  const [isVisible, setIsVisible] = useState(true)

  console.log(key)
  console.log(visible)
  console.log(contentTest)

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
          {contentTest.attributes.titles.en ||
            contentTest.attributes.titles.en_jp}
        </strong>
      </div>
      <div className="body">
        <div className="linkTrailer">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${contentTest.attributes.youtubeVideoId}`}
            controls={true}
            width={400}
            height={224.88}
          />
        </div>
        <p>{contentTest.attributes.synopsis}</p>
      </div>
    </Modal>
  )
}

CustomModal.propTypes = {
  key: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  contentTest: PropTypes.object.isRequired
}

export default CustomModal
