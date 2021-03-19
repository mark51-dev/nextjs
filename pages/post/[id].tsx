import axios from "../../services/posts.services";
import {IPost, Comment} from "../../interfaces/IPost";
import React, {ChangeEvent, FormEvent, useState} from "react";
import MainLayout from "../../components/MainLayout";



const PostPage: React.FC<{ data: IPost }> = ({data}) => {
    const [comment, setComment] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const addComment = async () => {
        await axios.post<Promise<Comment>>(`/comments`, {
            postId: data.id,
            body: comment
        },
            {
                headers: {'content-type': 'application/json'},
            }).catch(error => console.log(error));
    };

    return (
        <MainLayout>
            <h1>
                {data.title}
            </h1>
            <p>
                {data.body}
            </p>
            <ul>
                {
                    data.comments.map(item => <div key={item.id}>{item.body}</div>)
                }
            </ul>
           <div>
                <form>
                    <textarea onChange={changeHandler} />
                    <div>
                        <button onClick={addComment} disabled={(comment.length < 5)}>Add comment</button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};


export async function getServerSideProps({params}) {
    const response = await axios.get<Promise<IPost>>(`/posts/${params.id}?_embed=comments`, {
        headers: {'content-type': 'application/json'},
    });
    const data: IPost = await response.data;
    return {
        props: {
            data: data
        },
    }
}

export default PostPage;
