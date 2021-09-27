import UsersContainer from '../containers/20.4.3-2(UsersContainer)';'
import UserContainer from '../containers/20.4.7-2(UserContainer)';

import {Route} from 'react-router-dom';

const UserPage=()=>{
    return(
        <>
        <UserContainer/>
        <Route
        path="/users/:id"
        render={({match})=><UserContainer id={match.params.id}/>}
        />
        </>
    );
};
export default UsersPage;