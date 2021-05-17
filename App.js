import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import PlayList from "./components/PlayList";

const Container = styled.div`
  margin:0;
  height: 100vh;
  display: flex;
  background-color: #8f03a3;
  .app {
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:auto auto;
    max-width: 1024px;
  }
`;

function App() {
  const allPlayList = useSelector( (state) =>{
    const playList = state.playList;
    return playList;
  })
  
  const listenedMusic = allPlayList.filter(playList => playList.listened);
  const favoriteMusic = allPlayList.filter(playList => playList.favorite);

  return (
    <Container>
      <div className="app">
        <PlayList title = "All Songs" playList = {allPlayList}/>
        <PlayList title = "Listened" playList = {listenedMusic}/>
        <PlayList title = "Favorite" playList = {favoriteMusic}/>
      </div>
    </Container>
    
  );
}

export default App;
