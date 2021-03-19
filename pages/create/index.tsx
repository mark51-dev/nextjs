import {IPost} from "../../interfaces/IPost";
import axios from "../../services/posts.services";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";

const PostPage: React.FC = () => {
    const router = useRouter();
    const [formValue, setFormValue] = useState<{[key: string]: string }>({});
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post<IPost>('/posts', formValue,
            {
                headers: {'content-type': 'application/json'},
            }).then(() => router.push('/')).catch(error => console.log(error));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="title" type="text" onChange={handleChange}/>
                </div>
                <textarea name="body" onChange={handleChange}></textarea>
                <div><button type="submit" disabled={!formValue.title && !formValue.body}>Create post</button></div>
            </form>
        </MainLayout>
    );
};


export default PostPage;
