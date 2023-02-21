import Chat from "../Chat/Chat";
import React from "react";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Natalia Portman"
        message="Hello darling.."
        timestamp="40 second ago"
        profilePic="https://images.hellomagazine.com/imagenes/fashion/celebrity-style/20220630144319/natalie-portman-thor-cut-out-dress-massive-reaction/0-702-878/natalie-portman-variety-t.jpg"
      />
      <Chat
        name="Barbara Palvin"
        message="Hello, how are you?"
        timestamp="2 minutes ago"
        profilePic="https://iatkv.tmgrup.com.tr/d9523c/600/314/2/0/616/321?u=https://itkv.tmgrup.com.tr/2019/07/14/unlu-model-barbara-palvin-formunun-sirrini-paylasti-1563137041922.jpeg"
      />
      <Chat
        name="Gigi Hadid"
        message="I like you :)"
        timestamp="1 days ago"
        profilePic="https://static.daktilo.com/sites/683/uploads/2021/04/25/gigi-hadid-bir-gunde-ne-yiyor-1619376639.jpg"
      />
    </div>
  );
}

export default Chats;
