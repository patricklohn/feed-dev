import StylePost from './Post.module.css';
// controle de datas
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar.jsx';
import { useState } from 'react';

export function Post({author, content, publshedAt}) {
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publshedAt);

    const publishedDateFormatted = format(publshedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publshedAt, {locale: ptBR, addSuffix: true})
    const [comments, setComments] = useState(['Post muito bacana'])
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(){
        event.preventDefault();   
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleCreateNewCommentChange(){
        event.preventDefault();
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const comentsWithoutDeletOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(comentsWithoutDeletOne)
    }

    return (
            <article className={StylePost.post}>
                <header>
                    <div className={StylePost.author}>
                        <Avatar avatarUrl={author.avatarUrl}/>
                        <div className={StylePost.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>
                    <time title={publishedDateFormatted} dateTime={publshedAt.toISOString()}>{publishedDateRelativeToNow}</time>
                </header>
                <div className={StylePost.content}>
                    {content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>;
                        }
                        if(line.type === 'link'){
                            return <p key={line.content}><a href={line.a}>{line.content}</a></p>;
                        }
                    })}
                </div>
                <form onSubmit={handleCreateNewComment} value={newCommentText} className={StylePost.commentForm}>
                    <strong>Deixe seu feedBack</strong>
                    <textarea onChange={handleCreateNewCommentChange} placeholder='Deixe um comentário'></textarea>
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
                <div className={StylePost.comentList}>
                    {comments.map(coment => {
                        return <Comment key={coment} coment={coment} onDeleteComment={deleteComment}/>
                    })}
                </div>
            </article>
    )
}