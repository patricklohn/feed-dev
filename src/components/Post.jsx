import StylePost from './Post.module.css';

export function Post(props) {
    return (
            <article className={StylePost.post}>
                <header>
                    <div className={StylePost.author}>
                        <img className={StylePost.avatar} src="https://github.com/patricklohn.png"/>
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
            </article>
    )
}