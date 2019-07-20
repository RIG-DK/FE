
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
    margin-bottom: 2%;
    text-transform: uppercase;
    #home { 
        display: flex;
        margin-left: 2% 
        align-items: center;
        h2 {
            font-size: 1.3rem;
        }
    };

    .links {
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
    background-color: white;
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
    height: 600px;
    color: gray;

    #title {
        margin-left: 8%;
        margin-top: 3%;
        font-size: 1.5rem;
    }

    #header {
        margin-left: 5%;
        margin-top: 7%;
        font-size: 1.7rem;
    }

    .topMid {
        display: flex;
        width: 95%;
        margin: 0 auto;
        margin-top: 5%;
        justify-content: space-between;

        .card {
            border: solid black 2px;
            display: flex;
            flex-direction: column;
            padding: 15px;
            width: 30%;
            line-height: 1.5;
            margin-bottom: 5%;
        }
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

export const LoginForm = styled.form`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 550px;

    input {
        width: 450px;
        height: 50px;
        margin-bottom: 5px;
        font-size: 1.2rem;
        padding-left: 15px;
    }

    button {
        margin-top: 15px;
        height: 30px;
        width: 130px;
    }
}`