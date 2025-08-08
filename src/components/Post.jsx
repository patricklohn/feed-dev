import StylePost from './Post.module.css';
import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar.jsx';

export function Post(props) {
    return (
            <article className={StylePost.post}>
                <header>
                    <div className={StylePost.author}>
                        <Avatar avatarUrl="https://github.com/patricklohn.png"/>
                        <div className={StylePost.authorInfo}>
                            <strong>Patrick Lohn</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>
                    <time title='08 de Agosto às 21:58' dateTime='2025-08-07'>Publicado há 1h</time>
                </header>
                <div className={StylePost.content}>
                    <p>History Hello World 📖</p>
                    <p>Hello World é uma tradição para novas linguagens</p>
                    <p>Sempre que voce iniciar uma nova linguagem o primeiro passo sempre sera efetuar o print no console com a mensagem "Hello World"</p>
                    <p><a href="https://github.com/patricklohn/feed-dev">#patricklohn/feed-dev</a></p>
                    <p>
                        <a href="https://github.com/patricklohn/feed-dev">#patrickloh#feed-dev{" "}</a>
                        <a href="https://github.com/patricklohn/feed-dev">#patrickloh#feed-dev</a>
                    </p>
                </div>
                <form className={StylePost.commentForm}>
                    <strong>Deixe seu feedBack</strong>
                    <textarea placeholder='Deixe um comentário'></textarea>
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
                <div className={StylePost.comentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </article>
    )
}