import getAllBlogPosts from "./useGetAllBlogPosts"

describe("useGetAllBlogPosts", () => {
    
    it("gets data", () => {
        const data = getAllBlogPosts();
        expect(data).toBeTruthy();
    })
})