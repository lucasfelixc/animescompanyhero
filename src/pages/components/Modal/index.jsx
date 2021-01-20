import 'antd/dist/antd.less'
import '../../../styles/components/modal.less'

import { Modal } from 'antd'
import { useState } from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player/youtube'

const CustomModal = ({ idYtb, title, titleJp, synopsis }) => {
  const [isVisible, setIsVisible] = useState(true)
  // const idTrigun = 'vWWYXlCkq6w'

  /* Passando os iDs manualmente pois esses animes em específico estão sem iD
  vindo da API, para evitar de ficar algo vazio, decidi fazer uma função que
  analisa se está sem iD, se sim, passa manualmente */

  const setId = (title, titleJp) => {
    if (title || titleJp === 'Beet the Vandel Buster') {
      return 'sNW-zMNuRtQ'
    } else if (title || titleJp === 'Eyeshield 21') {
      return '-xhoHDVmXXg'
    } else if (title || titleJp === 'Hungry Heart: Wild Striker') {
      return 'JZUfCW6Nw1M'
    } else if (title || titleJp === 'Initial D Fourth Stage') {
      return 'ymKNoTN3kZk'
    }
  }

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
            url={`https://www.youtube.com/watch?v=${
              idYtb === '' ? setId(title, titleJp) : idYtb
            }`}
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
