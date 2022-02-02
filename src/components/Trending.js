import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const Trending = (props) => {
  const movies = useSelector(selectTrending);

  return (
    <>
      <h4>Trending</h4>
      <Container>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={"/detail/" + movie.id}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(
    4,
    minmax(0, 1fr)
  );

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    );
  }
`;

const Wrap = styled.div`
  padding-top: 56.9%;
  position: relative;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.09);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Trending;
