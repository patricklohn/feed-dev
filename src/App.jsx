import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import AppStyle from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/patricklohn.png',
      name: 'Patrick Lohn',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'History Hello World 📖'},
      {type: 'paragraph', content: 'Hello World é uma tradição para novas linguagens'},
      {type: 'paragraph', content: 'Sempre que voce iniciar uma nova linguagem o primeiro passo sempre sera efetuar o print no console com a mensagem Hello World'},
      {type: 'link', content: '#patricklohn/feed-dev ', a: 'https://github.com/patricklohn/feed-dev'}, 
      {type: 'link', content: '#patricklohn/feed-dev ', a: 'https://github.com/patricklohn/feed-dev'}  
    ],
    publshedAt: new Date('2025-08-08 21:21:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/kleberclh.png',
      name: 'Kleber Coelho',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'History Hello World 📖'},
      {type: 'paragraph', content: 'Hello World é uma tradição para novas linguagens'},
      {type: 'paragraph', content: 'Sempre que voce iniciar uma nova linguagem o primeiro passo sempre sera efetuar o print no console com a mensagem Hello World'},
      {type: 'link', content: '#patricklohn/feed-dev', a: 'https://github.com/patricklohn/feed-dev'}, 
      {type: 'link', content: '#patricklohn/feed-dev', a: 'https://github.com/patricklohn/feed-dev'}  
    ],
    publshedAt: new Date('2025-08-10 21:21:00')
  }
]

function App() {

  return (
    <>
      <Header />
      <div className={AppStyle.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publshedAt={post.publshedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
