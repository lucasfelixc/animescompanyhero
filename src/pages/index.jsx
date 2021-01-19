import 'antd/dist/antd.less'
import '../styles/pages/home.less'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Layout } from 'antd'

import api from '../services/api'

import Logo from '../assets/icons/Logo.svg'
import LogoMin from '../assets/icons/logoDark.svg'
import Plus from '../assets/icons/plus.svg'
// import ArrowUp from '../assets/icons/arrowUp.svg'

const { Header, Content } = Layout
const count = [1]

export default function Home() {
  const [contentData, setContentData] = useState([])

  useEffect(() => {
    api.get('/anime').then(response => {
      setContentData(response.data.data)
    })
  }, [count])

  return (
    <div>
      <main>
        <Layout className="container">
          <Header className="header">
            <Logo className="logoMax" />
            <LogoMin className="logoMin" />
          </Header>
          <Content className="site-layout-background">
            <div className="contentImg">
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
                <button className="btnPlus">
                  <Plus />
                </button>
              </div>
            </div>
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
