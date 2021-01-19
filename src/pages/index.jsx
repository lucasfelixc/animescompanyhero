import 'antd/dist/antd.less'
import '../styles/pages/home.less'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Layout } from 'antd'

import api from '../services/api'

import Logo from '../assets/icons/Logo.svg'
import LogoMin from '../assets/icons/LogoMin.svg'
import Plus from '../assets/icons/plus.svg'
import ArrowUp from '../assets/icons/arrowUp.svg'

const { Header, Content } = Layout
const count = [1]

export default function Home() {
  const [contentData, setContentData] = useState([])

  useEffect(() => {
    api.get('/anime').then(response => {
      setContentData(response.data.data)
    })

    console.log(contentData.attributes)
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
                  src="/src/assets/images/naruto.png"
                  alt="naruto"
                  layout="fill"
                />
              </div>
              <div className="infos">
                <strong>Name of anime</strong>
                <button className="btnPlus">
                  <Plus />
                </button>
              </div>
            </div>
          </Content>
          <ul className="list">
            {contentData.map((value, index) => {
              console.log(value)
              return (
                <li key={index} className="itemList">
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
                        value.attributes.titles.en
                          ? value.attributes.titles.en
                          : value.attributes.titles.en_jp
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
