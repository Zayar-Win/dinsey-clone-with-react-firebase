import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import RecommendForYou from "./RecommendForYou";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Original from "./Original";
import Trending from "./Trending";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { selectUserName } from "../features/user/UserSlice";
import { setMovies } from "../features/movie/movieSlice";
import { useEffect } from "react";
import db from "../firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommand = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(async () => {
    const queryShapshot = await getDocs(
      collection(db, "movies")
    );
    queryShapshot.forEach((doc) => {
      switch (doc.data().type) {
        case "trending":
          trending = [
            ...trending,
            { id: doc.id, ...doc.data() },
          ];
          break;
        case "new":
          newDisney = [
            ...newDisney,
            { id: doc.id, ...doc.data() },
          ];
          break;
        case "original":
          originals = [
            ...originals,
            { id: doc.id, ...doc.data() },
          ];
          break;
        case "recommend":
          recommand = [
            ...recommand,
            { id: doc.id, ...doc.data() },
          ];
          break;
      }
    });
    dispatch(
      setMovies({
        recommand,
        newDisney,
        originals,
        trending,
      })
    );
  }, [username]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <RecommendForYou />
      <NewDisney />
      <Original />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;
  top: 72px;

  &:after {
    background: url("/images/home-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 1;
    position: absolute;
    content: "";
    z-index: -1;
    inset: 0px;
  }
`;

export default Home;
