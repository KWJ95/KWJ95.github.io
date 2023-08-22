export function load({ cookies }) {
    const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/'});

    const externalLinks = [
        {icon: "fa-brands fa-github", text: "Github", src: "https://github.com/KWJ95"},
        {icon: "fa-brands fa-linkedin", text: "LinkedIn", src: "https://www.linkedin.com/in/koo-wei-jie-274081207/"},
        {icon: "fa-solid fa-envelope", text: "Email", src: "mailto:koo.wj95@gmai.com?subject=Business Inquiry"},
    ]

    return {
        visited, externalLinks
    };
};