import RobotProfileImage from "../assets/images/robot.png";
import UserProfileImage from "../assets/images/profile-1.jpg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {message, sender} = props; destructuring

  /*
        if(sender === 'robot'){ 
            return(
            <div>
              <img src="./images/robot.png" alt="User Image" width="50"></img>
              {message}
            </div>);
        }
        */
  console.log(UserProfileImage);
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          alt="Robot Image"
          className="chat-message-profile"
        ></img>
      )}
      <div className="chat-message-text">
        <p>{message}</p>
        <p className="message-time">{time}</p>
      </div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          alt="User Image"
          className="chat-message-profile"
        ></img>
      )}
    </div>
  );
}
