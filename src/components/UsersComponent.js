import React from 'react'

const UsersComponent = ( {users, following, handleFollow, handleUnFollow, handleBlock} ) => { 
    
    return (
        <div className="users-container" >
             
            {users && users.map((user) => {
                const { id, firstName, lastName, picture , follow} = user;
                return (
                    <div className='each' key={id}>
                        <div> <img src={picture} alt={firstName} /></div>
                        <div className="name">{firstName} {" "} {lastName}</div>
                        <div className="buttons-div">
                            {!follow ? (
                                <div className="follow" onClick={() => handleFollow(user)}> follow </div>) : (
                                <div className="unfollow" onClick={() => handleUnFollow(user)}> unfollow </div>
                            )}

                            <div className="block" onClick={() => handleBlock(user)}> block </div>
                        </div>
                    </div>
                )
            })} 
        </div>  
    )
}

export default UsersComponent
