import { connect } from "react-redux";
import Sample from "../components/18.3.1.4-4(Sample)";
import { getPost, getUsers } from "../modules/18.3.1.4-2(sample)";

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading.['sample/GET_POST'],
    loadingUsers: loading.['sample/GET_USERS']
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
