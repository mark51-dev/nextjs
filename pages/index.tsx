import React from "react";
import axios from '../services/posts.services';
import {IPost} from '../interfaces/IPost';
import {useSelector} from "react-redux";
import {wrapper} from '../redux/store';
import {fetchPosts} from "../redux/actions/postActions";
import {RootState} from "../redux/reducers/rootReducer";
import MainLayout from "../components/MainLayout";
import Link from "next/link";


const Index: React.FC = () => {
    const {posts}: any = useSelector<RootState>(state => state.post);
    return (
        <MainLayout>
            <ul>
                {
                    posts.map(item => {
                        return (
                            <>
                            <Link href={`post/${item.id}`}>
                              <li key={item.id}>{item.title}{item.id}</li>
                            </Link>
                                <Link href={`edit/${item.id}`}>Edit Post</Link>
                            </>
                        )
                    })
                }
            </ul>
        </MainLayout>
    );
};


export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, ...etc}) => {
        const response = await axios.get<Promise<IPost[]>>('/posts', {
            headers: {'content-type': 'application/json'},
        });
        const data: Array<IPost> = await response.data;
        store.dispatch(fetchPosts(data));
    }
);


export default Index;
