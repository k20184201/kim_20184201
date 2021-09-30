import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/write/25.2.1-2(Tagbox)';
import { changeField } from '../../modules/25.3-1(write)';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.write.tags);

  const onChangeTags = (nextTags) => {
    dispatch(
      changeField({
        key: 'tags',
        value: nextTags,
      }),
    );
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
