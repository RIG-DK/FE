
import styled from 'styled-components';

const primary =  '#303f9f';
const secondary = '#00796b';

export const NavWrapper = styled.nav`{
    display: flex;
    justify-content: space-between;
    height: 60px;
    // background-color: ${primary};
    background-color: black;
    color: white;
    position: sticky; top: 0;

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
        // color: #e0edf0;
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
    width: 85%;
    margin-bottom: 3%;
    margin-top: 3%;
    border: solid ${secondary} 1px;
    white-space: pre-wrap;
    height: 100%;

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

    div {
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
    border-color: ${secondary};
    margin-left: 2%;
    margin-bottom: 3%;
    text-transform: uppercase;

    :hover {
        background-color: ${secondary}
        color: white;
        cursor: pointer;
    }
}`


export const HomeTop = styled.div`{
    height: 650px;
    // background-color: #e0edf0;

    h1 {
        margin-top: 0px;
    }

}`