import styled from 'styled-components';

export const Container = styled.div`
 max-Width: 1000px;
 margin: 50px  auto;
//  border: solid 2px red;

.users-container { 
width: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content: center; 
}

.followers-container {
    border: solid 2px red;
}

.each {
    flex: 1 16%;
    border: solid 1px #ddd;
    margin: 10px;
    min-width: 220px; 
    max-width: 320px;
    border-radius: 0 0 9px 9px;
    over-flow: hidden;
}

.name {
    padding: 7px;
    font-size: 19px;
    font-weight: 600;
}

.buttons-div {
    display: flex;
    justify-content: center; 
    margin-bottom: 10px;
}

.buttons-div div {
    flex: 1; 
    text-align: center;
    margin: 3px;
    padding: 6px 0; 
    color: #000;
    transition: 1s;
    // background-color:#ddd;
    border: solid 1px #ddd;
    border-radius: 9px
}

.follow:hover {
    color: #fff;
    background-color:#5ec7e7;
    border: solid 1px #5ec7e7;
    border-radius: 9px
}

.unfollow:hover {
    color: #fff;
    background-color: #d6da1e;
    border: solid 1px #d6da1e;
    border-radius: 9px
}

.block:hover {
    color: #fff;
    background-color: #ff00aa;
    border: solid 1px  #ff00aa;
    border-radius: 9px
}

img {
    width: 100%;
    height: 200px;
}
`