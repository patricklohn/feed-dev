import StyleComment from './Comment.module.css';
import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

interface CommentProps {
    coment: string;
    onDeleteComment: (coment: string) => void; 
}

export function Comment({coment, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(coment)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={StyleComment.comment}>
            <Avatar hasBorder={false} avatarUrl='https://github.com/patricklohn.png'/>
            <div className={StyleComment.commentBox}>
                <div className={StyleComment.commentContent}>
                    <header>
                        <div className={StyleComment.authorAndTime}>
                            <strong>Patrick Lohn</strong>
                            <time title='08 de Agosto às 21:58' dateTime='2025-08-07'>Publicado há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{coment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}