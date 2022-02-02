import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(
    {}
  );

  useEffect(async () => {
    const querySnapShot = await getDocs(
      collection(db, "movies")
    );
    querySnapShot.forEach((doc) => {
      if (doc.id === id) {
        setDetailData(doc.data());
      } else {
        console.log("Id not Found");
      }
    });
  }, [id]);

  return (
    <Container>
      <BackgroundImage>
        <img src={detailData.backgroundImg} />
      </BackgroundImage>
      <ImgTitle>
        <img src={detailData.titleImg} />
      </ImgTitle>
      <ContentMeta>
        <Content>
          <Player>
            <img src='/images/play-icon-black.png' />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src='/images/play-icon-white.png' />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src='/images/group-icon.png' />
            </div>
          </GroupWatch>
        </Content>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>
          {detailData.description}
        </Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  top: 72px;
  overflow-x: hidden;
  display: block;
  padding: 0px calc(3vw + 5px);
`;
const BackgroundImage = styled.div`
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  position: fixed;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 30vw;
  min-height: 170px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  min-height: 52px;
  flex-flow: row nowrap;
`;

const Player = styled.button`
  height: 52px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  background: rgb(249, 249);
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;
    font-size: 12px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
`;

const AddList = styled.div`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(249, 249, 249);

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      width: 16px;
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
    }
    &:nth-child(2) {
      width: 2px;
      height: 16px;
      transform: translateX(-8px);
    }
  }
`;

const GroupWatch = styled.div`
  width: 44px;
  height: 44px;
  background: rgb(0, 0, 0);
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);

  div {
    width: 40px;
    height: 40px;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 24px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  color: rgb(249, 249, 249);
  padding: 16px 0;
  line-height: 1.4;

  @media (max-width) {
    font-size: 14px;
  }
`;

export default Detail;
