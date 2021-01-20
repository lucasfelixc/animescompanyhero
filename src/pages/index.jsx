import 'antd/dist/antd.less'
import '../styles/pages/home.less'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import Modal from './components/Modal'

import { Layout } from 'antd'

import api from '../services/api'

import Logo from '../assets/icons/Logo.svg'
import LogoMin from '../assets/icons/LogoMin.svg'
import Plus from '../assets/icons/plus.svg'

const { Header, Content } = Layout

export default function Home() {
  const [contentData, setContentData] = useState([])
  const [modals, setModals] = useState([])

  useEffect(() => {
    api.get('/anime').then(response => {
      setContentData(response.data.data)
    })
  }, [])
  return (
    <div>
      <main>
        <Layout className="container">
          <Header className="header">
            <Logo className="logoMax" />
            <LogoMin className="logoMin" />
          </Header>
          <Content className="site-layout-background">
            {contentData.slice(0, 1).map(value => {
              return (
                <div className="contentImg" key={value.id}>
                  <div className="imgPlace">
                    <Image
                      src={value.attributes.coverImage.large}
                      alt="spotlight"
                      layout="fill"
                    />
                  </div>
                  <div className="infos">
                    <strong>
                      {value.attributes.titles.en ||
                        value.attributes.titles.en_jp}
                    </strong>
                    <button
                      className="btnPlus"
                      onClick={() => {
                        setModals([
                          ...modals,
                          <Modal
                            key={value.id}
                            visible={true}
                            idYtb={value.attributes.youtubeVideoId}
                            title={value.attributes.titles.en}
                            titleJp={value.attributes.titles.en_jp}
                            synopsis={value.attributes.synopsis}
                          />
                        ])

                        console.log(modals)
                      }}
                    >
                      <Plus />
                    </button>
                    {modals.map(modal => modal)}
                  </div>
                </div>
              )
            })}
          </Content>
          <ul className="list">
            {contentData.slice(1).map(value => {
              return (
                <li
                  key={value.attributes.slug}
                  className="itemList"
                  onClick={() =>
                    setModals([
                      ...modals,
                      <Modal
                        key={value.id}
                        visible={true}
                        idYtb={value.attributes.youtubeVideoId}
                        title={value.attributes.titles.en}
                        titleJp={value.attributes.titles.en_jp}
                        synopsis={value.attributes.synopsis}
                      />
                    ])
                  }
                >
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
