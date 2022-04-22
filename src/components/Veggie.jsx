import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    }

    return <div>
        <Wrapper>
            <h3>Vegetarian Pics</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem",
            }}>
                {veggie.map(recipe => {
                    return (
                        <Splidediv key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </Splidediv>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>;
}

const Splidediv = styled(SplideSlide)`
    @media(max-width: 1000px){
        width: calc(((100% + 5rem) / 2) - 5rem) !important;
    }

    @media(max-width: 768px){
        width: calc(((100% + 5rem) / 1) - 5rem) !important;
    }
`;

const Wrapper = styled.div`
    margin: 4rem 0rem;
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position:relative;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`;

export default Veggie;
