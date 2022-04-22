import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map(ingredient => {
                            return (
                                <li key={ingredient.id}>
                                    {ingredient.original}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin: 5rem 0 5rem;
    display: flex;
    width: 100%;

    @media(max-width: 1000px){
        flex-direction: column;

        div img{
            width: 100%;
        }
    }
    .active{
        background: linear-gradient(35deg, #353535, #313131);
        color: #fff;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border: 2px solid #000;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;

    @media(max-width: 1000px){
        margin-left: 0;
    }
`;

export default Recipe;
