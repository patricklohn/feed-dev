import StylePost from './Post.module.css';
// controle de datas
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string,
    a?: string,
    content: string,
}

interface PostProps{
    author: Author;
    publshedAt: Date;
    content: Content[]
}

export function Post({author, content, publshedAt}: PostProps) {
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
    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event:FormEvent){
        event.preventDefault();   
        setComments([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleCreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.preventDefault();
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

     function deleteComment(commentToDelete: string){
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
                <form onSubmit={handleCreateNewComment} className={StylePost.commentForm}>
                    <strong>Deixe seu feedBack</strong>
                    <textarea  value={newCommentText} onChange={handleCreateNewCommentChange} placeholder='Deixe um comentário' required onInvalid={handleNewCommentInvalid}></textarea>
                    <footer>
                        <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
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