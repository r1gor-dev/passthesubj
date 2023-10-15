import * as React from 'react';
import {PostPtS} from "../types/postinfo";
import { generatePostPtS } from "../utils/generate-dommy-data";

export const PostContext = React.createContext<PostPtS[]>([]);
export const PostProvider = ({children}:React.PropsWithChildren):JSX.Element => {
    const [posts, setPosts] = React.useState<PostPtS[]>([]);
    React.useEffect(() => {setPosts(generatePostPtS())}, []);
    return <PostContext.Provider value={posts}>{children}</PostContext.Provider>
}
