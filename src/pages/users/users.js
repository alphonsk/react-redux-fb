import React, { useEffect } from 'react';
import { Container } from '../../styled';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, followUser, unFollowUser, blockUser } from '../../actions/userActions'
import { addFollower, unFollower } from '../../actions/followActions'
import UsersComponent from '../../components/UsersComponent';

//



const Users = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector(state => state.users);
    const { following } = useSelector(state => state.following); 
    const { showAllUsers } = useSelector(state => state.showAllUsers);

    // 
    const handleFollow = (user) => {
        const newUser = { ...user }
        newUser.follow = true;
        dispatch(followUser(newUser));
        dispatch(addFollower(newUser));
    }

    const handleUnFollow = (user) => {
        const newUser = { ...user }
        newUser.follow = false;
        dispatch(unFollowUser(newUser));
        dispatch(unFollower(newUser));
    }

    const handleBlock = (user) => {
        dispatch(unFollower(user));
        dispatch(blockUser(user));
    }


    //
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const userProps = {
        users,
        handleFollow,
        handleUnFollow,
        handleBlock
    }

    const followingProps = {
        users: following,
        handleFollow,
        handleUnFollow,
        handleBlock
    }



    return (
        <div>

            {/* ALL USERS */}
            <Container className={`${showAllUsers ? 'show-users' : 'hide-users'}`}>
                {loading && <div style={{ textAlign: 'center', padding: '30%', fontSize: '3rem' }}> Loading ... </div>}
                {error && <div style={{ textAlign: 'center', padding: '30%', fontSize: '3rem' }}> Error ... <div style={{ fontSize: '1rem' }}> try again</div> </div>}
                <div>
                    <UsersComponent  {...userProps} />
                </div>
            </Container>
            {/* ALL FOLLOWERS */}
            <Container className={`${showAllUsers ? 'hide-users' : 'show-users'}`}>
                {(following.length < 1) && <div style={{ textAlign: 'center', padding: '30%', fontSize: '3rem' }}> No followers ... </div>}
                {error && <div style={{ textAlign: 'center', padding: '30%', fontSize: '3rem' }}> Error ... <div style={{ fontSize: '1rem' }}> try again</div> </div>}
                <div>
                    <UsersComponent  {...followingProps} />
                </div>
            </Container>
        </div>
    );
}

export default Users;
