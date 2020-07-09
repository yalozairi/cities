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
`;
