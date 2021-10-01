import HeaderContainer from '../containers/common/24.3.3-3(HeaderContainer)';
import PostListContainer from '../containers/posts/26.2.2-4(PostListContainer)';
import PaginationContainer from '../containers/posts/26.2.4-5(PaginaionContainer)';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};
export default PostListPage;
