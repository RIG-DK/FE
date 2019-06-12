
import styled from 'styled-components';

const primary =  '#303f9f';
const secondary = '#00796b';

export const NavWrapper = styled.nav`{
    display: flex;
    justify-content: space-between;
    height: 70px;
    background-color: ${primary};
    a { color: white };
    position: sticky; top: 0;

    #home { 
        display: flex;
        margin-left: 2% 
        align-items: center;
        text-transform: uppercase;
    };

    .links {
        text-transform: uppercase;
        display: flex;
        width: 33%;
        justify-content: space-around;
        margin-right: 2%;
        align-items: center;
    };
}`

export const PostWrapper = styled.div`{
    margin: 0 auto;
    width: 85%;
    margin-bottom: 3%;
    margin-top: 3%;
    border: solid ${secondary} 1px;
    white-space: pre-wrap;
    height: 100%;
    :hover {
        cursor: pointer;
    }

    h3, p {
        margin-left: 2%;
        width: 95%;
        margin-bottom: 2%;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    p:last-child {
        border: solid red 2px;
    }

    #${props => props.postId} {
        display: ${props => 
            props.open === 'false' && 'none'
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


// #one {
//     display: ${props => 
//         props.open === 'true' && 'none'
//     }
// }