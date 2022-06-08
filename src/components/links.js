

const makeLink = (page, name) => ({page, name});
const links = {
    home: makeLink('/', 'Home'),
    //blog: makeLink('/blog/', 'Blog'),
    //resume: makeLink('/resume/', 'Resume'),
    books: makeLink('/books/', "Books I've Read"),
    music: makeLink('/music/', "My Music"),
   
}

const getLinks = () => links;

export default links;