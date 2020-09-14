import React from "react";
import { CardContent, Card, Typography } from "@material-ui/core";
import "./Message.css";

function Message({username,message}) {
  const isUser = username===message.username;
  return (
    <div className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser? "message__userCard" : "message__guestCard"}>
            <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                            {message.username}
                  </Typography>
                  <Typography variant="h5" component="h2">
                            {message.text}
                  </Typography>
            </CardContent>
        </Card>
    </div>
  );
}

export default Message;
