import { FindManyOptions, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      const allPosts = postsService.findMany();
      const expectedPosts = allPosts.map(item => {
        return { text: item.text }
      })
      expect(expectedPosts).toEqual(posts)
    });

    it('should return correct posts for skip and limit options', () => {
      const allPosts = postsService.findMany({ limit: 2, skip: 1 });
      const expectedPosts = allPosts.map(item => {
        return { text: item.text }
      })

      expect(expectedPosts).toEqual([posts[1], posts[2]])
    });

    it('should return correct posts for skip option', () => {
      const options: FindManyOptions = { skip: 8 };
      const expectedPosts = posts.slice(8);
      const foundPosts = postsService.findMany(options);
      expect(foundPosts).toEqual(expectedPosts);
    });

    it('should return correct posts for limit option', () => {
      const options: FindManyOptions = { limit: 8 };
      const expectedPosts = posts.slice(0, 8);
      const foundPosts = postsService.findMany(options);
      expect(foundPosts).toEqual(expectedPosts);
    });

    // реализуйте недостающие тест-кейсы
  });
});