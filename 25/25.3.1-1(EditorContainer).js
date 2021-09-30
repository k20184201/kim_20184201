import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/25.1-1(Editor)';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/25.3-1(write)';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
