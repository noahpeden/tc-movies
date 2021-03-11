import styled from 'styled-components';

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHomeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledNavBar = styled.nav`
  ul {
    list-style-type: none;
    margin: 1px;
    padding: 1px;
    overflow: hidden;
    background-color: #8842d5;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: left;
    padding: 15px 17px;
    text-decoration: none;
  }

  /* A color changes when hovered over */
  li a:hover {
    background-color: #7300ff;
  }
`;

export const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 10px;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
  }
  button:hover {
    background: lightgrey;
    cursor: pointer;
  }
`;
