import 'antd/dist/antd.less'
import '../styles/pages/home.less'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Layout } from 'antd'

import api from '../services/api'

import Logo from '../assets/icons/Logo.svg'
import LogoMin from '../assets/icons/LogoMin.svg'
import Plus from '../assets/icons/plus.svg'
// import naruto from '../assets/images/naruto.png'

const { Header, Content } = Layout

export default function Home() {
  const [contentData, setContentData] = useState('')
  const animes = contentData.data

  useEffect(() => {
    async function setData() {
      const { data } = await api
        .get('/anime')
        .catch(error => console.log(error))

      setContentData(data)
      console.log(data)
    }

    setData()
  })

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
            {animes.map((value, index) => {
              console.log(value)
              return (
                <li key={index} className="itemList">
                  <div className="containerImg">
                    <Image
                      src={value.attributes.postImage.tiny}
                      alt={
                        value.attributes.titles.en
                          ? value.attributes.titles.en
                          : value.attributes.titles.en_jp
                      }
                      layout="fill"
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
