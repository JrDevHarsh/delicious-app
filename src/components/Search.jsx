import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {

    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        navigate('/searched/' + input.trim());
        setInput('');
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0 10rem;

    @media(max-width: 1000px){
        margin: 0;
    }

    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        letter-spacing: 1px;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`

export default Search;
