import EditorContainer from '../containers/write/25.3.1-1(EditorContainer)';
import Responsive from '../components/common/24.3.1-1(Responsive)';
import WriteActionButtonsContainer from '../containers/write/25.3.3-4(WriteActionButtonsContainer)';
import TagBoxContainer from '../containers/write/25.3.2-1(TagBoxContainer)';
import { Helmet } from 'react-helmet-async';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기-REACTORS</title>
      </Helmet>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};
export default WritePage;
