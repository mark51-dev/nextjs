import axios from "../../services/posts.services";
import {IPost} from "../../interfaces/IPost";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";

const EditPostPage: React.FC<{ data: IPost }> = ({data}) => {
    const router = useRouter();
    const [formValue, setFormValue] = useState<any>({...data});
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.put<IPost>(`/posts/${data.id}`, formValue,
            {
                headers: {'content-type': 'application/json'},
            }).then(() => router.push('/')).catch(error => console.log(error));
    };

    const deletePostHandler = async () => {
        await axios.delete(`/posts/${data.id}`, {
            headers: {'content-type': 'application/json'}
        }).then(() => router.push('/')).catch(error => console.log(error));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValue((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
        console.log(formValue);
    };
    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="title" type="text" value={formValue.title} onChange={handleChange}/>
                </div>
                <div><textarea name="body" value={formValue.body} onChange={handleChange}/></div>
                <button type="submit" disabled={!formValue.title && !formValue.body}>Save changes</button>
            </form>
            <button onClick={deletePostHandler}>Delete Post</button>
        </MainLayout>
    );
};


export async function getServerSideProps({params}) {
    const response = await axios.get<Promise<IPost>>(`/posts/${params.id}`, {
        headers: {'content-type': 'application/json'},
    });
    const data: IPost = await response.data;
    return {
        props: {
            data: data
        },
    }
}

export default EditPostPage;
