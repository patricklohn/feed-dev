import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import AppStyle from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={AppStyle.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Patrick Lohn' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Error nesciunt provident id aperiam! Suscipit, perspiciatis corporis, consectetur quisquam laborum eius voluptatem saepe assumenda 
            repudiandae non nihil. Illum natus velit beatae.'
          />
          <Post 
            author='Vanessa Bernardo' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Error nesciunt provident id aperiam! Suscipit, perspiciatis corporis, consectetur quisquam laborum eius voluptatem saepe assumenda 
            repudiandae non nihil. Illum natus velit beatae.'
          />
        </main>
      </div>
    </>
  )
}

export default App
