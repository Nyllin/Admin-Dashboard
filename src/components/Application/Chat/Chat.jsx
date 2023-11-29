import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import SearchBar from "../../Searchbar/Searchbar";
const Chat = () => {
  const ChatContainer = styled("div")`
    position: absolute;
    width: 80%;
    left: 20%;
    margin-left: 40px;
   
  `;
  return (
    <ChatContainer>
      <SearchBar />
      <Grid container spacing={2} mt={3}>
        <Grid item md={5.5} sm={11}>
          <ChatList />
        </Grid>
        <Grid item md={5.5} sm={11}>
          <ChatBox />
        </Grid>
      </Grid>
    </ChatContainer>
  );
};

export default Chat;
