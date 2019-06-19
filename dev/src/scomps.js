
import styled from 'styled-components';

// const primary =  '#303f9f';
// const secondary = '#00796b';

export const NavWrapper = styled.nav`{
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: black;
    color: white;
    position: sticky; top: 0;
    z-index: 1;

    #home { 
        display: flex;
        margin-left: 2% 
        align-items: center;
    };

    .links {
        text-transform: uppercase;
        display: flex;
        width: 33%;
        justify-content: space-around;
        margin-right: 2%;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
    };

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
}`

export const PostWrapper = styled.div`{
    margin: 0 auto;
    margin-bottom: 3%;
    margin-top: 3%;
    border: solid black 2px;
    white-space: pre-wrap;
    height: 100%;
    width: 75%;
    h3, h5, p {
        margin-left: 2%;
        width: 95%;
        margin-bottom: 2%;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    h5 {
        font-weight: 400;
    }

    .bod {
        display: none;
    }


    #${props => props.postId} {
        display: ${props => 
            props.open === 'true' && 'block'
        }
    }

}`

export const SeeMoreButton = styled.button`{
    width: 150px;
    height: 40px;
    // border-color: gray;
    // background-color: gray;
    // color: white;
    margin-left: 2%;
    margin-bottom: 3%;
    text-transform: uppercase;

    :hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
}`


export const HomeTop = styled.div`{
    height: 650px;
    h1 {
        margin-top: 0px;
    }

}`

export const StyledPost = styled.div`{
    width: 85%;
    box-shadow: 0px 0px 30px -2px gray;
    margin: 0 auto;
    padding: 2% 5% 3% 5%;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-size: 14px;
    margin-top: 2%;
    margin-bottom: 2%;
    h1 {
        display: flex;
        justify-content: center;
    }
}`

export const Headings = styled.div`{
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    input {
        height: 40px;
        padding: 10px;
        outline: none;
        font-size: 18px;
    }

    textArea {
        height: 100px;
        padding: 10px;
        outline: none;
        font-size: 14px;
    }

}`

export const PostsWrapper = styled.div`{
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
}`