import { posts } from './data';

export function load() {
    return {
        skills: posts.map((post) => ({
            talent: post.talent,
            exp: post.exp
        }))
    };
}