import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { UsersShow } from "./UsersShow";
import { Modal } from "./Modal";

export function Home() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleIndexUsers = () => {
    // console.log("handleIndexUsers");
    // axios.get("http://localhost:3000/users.json").then((response) => {
    //   console.log(response.data);
    //   setUsers(response.data);
    // });
    setUsers([
      {
        id: 1,
        first_name: "test",
        last_name: "test",
        image_url:
          "https://www.simplebooks.co.za/wp-content/uploads/2019/07/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg",
        personal_website_url: "test.com",
        linledin_url: "linkedin.com",
      },
      {
        id: 1,
        first_name: "test2",
        last_name: "test2",
        image_url:
          "https://www.simplebooks.co.za/wp-content/uploads/2019/07/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg",
        personal_website_url: "test.com",
        linledin_url: "linkedin.com",
      },
    ]);
  };

  const handleShowUser = (user) => {
    console.log("handleShowUser", user);
    setIsUsersShowVisible(true);
    setCurrentUser(user);
  };

  const handleHideUser = () => {
    console.log("handleHideUser");
    setIsUsersShowVisible(false);
  };

  useEffect(handleIndexUsers, []);

  return (
    <div>
      <UsersIndex users={users} onSelectUser={handleShowUser} />
      <Modal show={isUsersShowVisible} onClose={handleHideUser}>
        <UsersShow user={currentUser} />
      </Modal>
    </div>
  );
}
