import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components"
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <List>
            <SLink to={'/cusine/Italian'}>
                <FaPizzaSlice />
                <h4>Italians</h4>
            </SLink>
            <SLink to={'/cusine/Americans'}>
                <FaHamburger />
                <h4>Americans</h4>
            </SLink>
            <SLink to={'/cusine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cusine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;

    h4{
        color: #fff;
        font-size: 0.8rem;
    }
    svg{
        color: #fff;
        font-size: 1.5rem;
    }

    @media(max-width: 768px){
        width: 5rem;
        height: 5rem;
        margin-right: 1rem;

        svg{
            font-size: 1.25rem;
        } 
    }


    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color: #fff;
        }
        h4{
            color: #fff;
        }
    }
`

export default Category;
