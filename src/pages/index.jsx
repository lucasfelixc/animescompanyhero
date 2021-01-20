import 'antd/dist/antd.less'
import '../styles/pages/home.less'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

import { Layout, Modal } from 'antd'

import api from '../services/api'

import Logo from '../assets/icons/Logo.svg'
import LogoMin from '../assets/icons/LogoMin.svg'
import Plus from '../assets/icons/plus.svg'
// import ArrowUp from '../assets/icons/arrowUp.svg'

const { Header, Content } = Layout
const count = [1]

export default function Home() {
  const [contentData, setContentData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    api.get('/anime').then(response => {
      setContentData(response.data.data)
    })

    console.log(contentData)
  }, [count])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <main>
        <Layout className="container">
          <Header className="header">
            <Logo className="logoMax" />
            <LogoMin className="logoMin" />
          </Header>
          <Content className="site-layout-background">
            {contentData.slice(0, 1).map((value, index) => {
              return (
                <div className="contentImg" key={value.id}>
                  <div className="imgPlace">
                    <Image
                      src={contentData[0].attributes.coverImage.original}
                      alt="naruto"
                      layout="fill"
                    />
                  </div>
                  <div className="infos">
                    <strong>
                      {contentData[0].attributes.titles.en ||
                        contentData[0].attributes.titles.en_jp}
                    </strong>
                    <button className="btnPlus" onClick={showModal}>
                      <Plus />
                    </button>

                    <Modal
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <div className="header">
                        <strong>
                          {contentData[0].attributes.titles.en ||
                            contentData[0].attributes.titles.en_jp}
                        </strong>
                      </div>
                      <div className="body">
                        <div className="linkTrailer">
                          <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${contentData[0].attributes.youtubeVideoId}`}
                            controls={true}
                            width={400}
                            height={224.88}
                          />
                        </div>
                        <p>{contentData[0].attributes.synopsis}</p>
                      </div>
                    </Modal>
                  </div>
                </div>
              )
            })}
          </Content>
          <ul className="list">
            {contentData.slice(1).map((value, index) => {
              console.log(value)
              return (
                <li key={value.id} className="itemList">
                  <div className="contentTitle">
                    <strong>
                      {value.attributes.titles.en
                        ? value.attributes.titles.en
                        : value.attributes.titles.en_jp}
                    </strong>
                  </div>
                  <div className="containerImg">
                    <Image
                      src={value.attributes.posterImage.original}
                      alt={
                        value.attributes.titles.en ||
                        value.attributes.titles.en_jp
                      }
                      width={168}
                      height={238.25}
                    />
                  </div>
                  <div className="contentInfo">
                    <strong>
                      {value.attributes.titles.en
                        ? value.attributes.titles.en
                        : value.attributes.titles.en_jp}
                    </strong>
                    <button className="btnPlus">
                      <Plus />
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </Layout>
      </main>
    </div>
  )
}
