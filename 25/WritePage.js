import EditorContainer from '../containers/write/25.3.1-1(EditorContainer)';
import Responsive from '../components/common/24.3.1-1(Responsive)';
import WriteActionButtonsContainer from '../containers/write/25.3.3-4(WriteActionButtonsContainer)';
import TagBoxContainer from '../containers/write/25.3.2-1(TagBoxContainer)';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};
export default WritePage;
