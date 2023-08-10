import { posts } from './data';
import { lists } from '$lib/index';

export function load() {
    return {
        skills: posts.map((post) => ({
            talent: post.talent,
            exp: post.exp
        })),
        educations: lists.map((list) => ({
            school: list.school,
            year: list.year
        }))
    };
}