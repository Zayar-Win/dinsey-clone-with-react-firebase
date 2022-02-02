import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setLogoutState,
  setUserLoginDetails,
} from "../features/user/UserSlice";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  const googleSignin = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((res) => setUser(res.user))
        .catch((error) => console.log(error));
    } else if (username) {
      auth
        .signOut()
        .then((res) => dispatch(setLogoutState()))
        .catch((err) => alert(err.message));
      navigate("/");
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' />
      </Logo>
      {!username ? (
        <LogBtn onClick={googleSignin}>
          Login
        </LogBtn>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src='/images/home-icon.svg' />
              <span>Home</span>
            </a>
            <a>
              <img src='/images/search-icon.svg' />
              <span>Search</span>
            </a>
            <a>
              <img src='/images/watchlist-icon.svg' />
              <span>WatchList</span>
            </a>
            <a>
              <img src='/images/original-icon.svg' />
              <span>Originals</span>
            </a>
            <a>
              <img src='/images/movie-icon.svg' />
              <span>Movies</span>
            </a>
            <a>
              <img src='/images/series-icon.svg' />
              <span>Series</span>
            </a>
          </NavMenu>
          <SingOut>
            <UserImg
              src={userphoto}
              alt={username}
            />
            <DropDown onClick={googleSignin}>
              Sign out
            </DropDown>
          </SingOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #040714;
  padding: 0 36px;
`;

const Logo = styled.a`
  width: 80px;
  margin-top: 4px;
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;
  align-items: center;
  position: relative;

  a {
    display: flex;
    align-items: center;
    margin-left: 5px;

    img {
      width: 20px;
      height: 20px;
      min-height: 20px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      ling-height: 1.5;
      padding: 2px 5px;
      margin-top: 3px;
      letter-spacing: 1.4px;
      position: relative;

      &:before {
        background: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms linear;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogBtn = styled.a`
  background: transparent;
  color: #f9f9f9;
  border: 1px solid #f9f9f9;
  padding: 10px 13px;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s linear;
`;
const UserImg = styled.img`
  width: 80%;
  height: 80%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 58px;
  width: 100%;
  font-size: 13px;
  letter-spacing: 1.2px;
  background: rgb(19, 19, 19);
  border: 1px solid #f9f9f9;
  padding: 5px 15px;
  border-radius: 2px;
  cursor: pointer;
  opacity: 0;
`;
const SingOut = styled.div`
  width: 58px;
  height: 58px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  ${UserImg} {
    border-radius: 50%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Header;
