import { skillsets, hobbies } from './data';
import { lists } from '$lib/index';

export function load() {
    return {
        skills: skillsets.map((post) => ({
            talent: post.talent,
            remark: post.remark
        })),
        educations: lists.map((list) => ({
            school: list.school,
            year: list.year,
            programme: list.programme,
            icon: list.icon
        })),
        hobbies: hobbies.map((h) => ({
            act: h.activity,
            desc: h.description,
            icon: h.icon
        }))
    };
}