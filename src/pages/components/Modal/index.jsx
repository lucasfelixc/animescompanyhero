import 'antd/dist/antd.less'
import '../../../styles/components/modal.less'

import { Modal } from 'antd'
import { useState } from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player/youtube'

const CustomModal = ({ contentTest, idYtb, title, titleJp, synopsis }) => {
  const [isVisible, setIsVisible] = useState(true)

  console.log(idYtb)

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
        <strong>{title || titleJp}</strong>
      </div>
      <div className="body">
        <div className="linkTrailer">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${idYtb}`}
            controls={true}
            width={400}
            height={224.88}
          />
        </div>
        <p>{synopsis}</p>
      </div>
    </Modal>
  )
}

CustomModal.propTypes = {
  contentTest: PropTypes.object.isRequired,
  idYtb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleJp: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}

export default CustomModal
