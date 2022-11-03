import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";

export function Home() {
  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    // console.log("handleIndexUsers");
    // axios.get("http://localhost:3000/users.json").then((response) => {
    //   console.log(response.data);
    //   setPhotos(response.data);
    // });
    setUsers([
      {
        id: 1,
        first_name: "test",
        last_name: "test",
        image_url:
          "https://www.simplebooks.co.za/wp-content/uploads/2019/07/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg",
        personal_website_url: "test.com",
      },
      {
        id: 1,
        first_name: "test2",
        last_name: "test2",
        image_url:
          "https://www.simplebooks.co.za/wp-content/uploads/2019/07/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg",
        personal_website_url: "test.com",
      },
    ]);
  };

  useEffect(handleIndexUsers, []);

  return (
    <div>
      <UsersIndex users={users} />
    </div>
  );
}
