import 'antd/dist/antd.less'
import '../styles/pages/home.less'
import { Layout, List, Card } from 'antd'

import Logo from '../assets/icons/Logo.svg'
import LogoMin from '../assets/icons/LogoMin.svg'
import Plus from '../assets/icons/plus.svg'
// import naruto from '../assets/images/naruto.png'

const { Header, Content } = Layout

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  }
]

export default function Home() {
  return (
    <div>
      <main>
        <Layout className="container">
          <Header className="header">
            <Logo className="logoMax" />
            <LogoMin className="logoMin" />
          </Header>
          {/* <img src={naruto} alt="" /> */}
          <Content className="site-layout-background">
            <div className="contentImg">
              <div className="test"></div>
              <div className="infos">
                <strong>Name of anime</strong>
                <button className="btnPlus">
                  <Plus />
                </button>
              </div>
            </div>
          </Content>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Layout>
      </main>
    </div>
  )
}
