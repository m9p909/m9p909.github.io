

const makeLink = (page, name) => ({page, name});
const links = {
    home: makeLink('/', 'Home'),
    blog: makeLink('/blog/', 'Blog'),
    resume: makeLink('/resume/', 'Resume')
}

const getLinks = () => links;

export default links;