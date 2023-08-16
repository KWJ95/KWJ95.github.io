import { skillsets, hobbies } from './data';
import { lists } from '$lib/index';

export function load() {
    return {
        skills: skillsets.map((post) => ({
            talent: post.talent,
            exp: post.exp
        })),
        educations: lists.map((list) => ({
            school: list.school,
            year: list.year
        })),
        hobbies: hobbies.map((h) => ({
            act: h.activity,
            desc: h.description
        }))
    };
}