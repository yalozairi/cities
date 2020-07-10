import styled from "styled-components";
export const Title = styled.h1`
  text-align: center;
`;

export const CityWrapper = styled.div`
  margin: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;

    :hover {
      cursor: pointer
    }
  }
  p {
    text-align: center;
    &.book-price {
      color: ${(props) => props.theme.dark};
    }
  }
  h1 {
    text-align: center;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;


  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  border-radius: 4px;
`;
