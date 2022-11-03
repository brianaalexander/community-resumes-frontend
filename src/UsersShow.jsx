import { Timeline } from "react-twitter-widgets";

export function UsersShow(props) {
  return (
    <div id="users-show">
      <h1>User information</h1>
      <p>First name: {props.user.first_name}</p>
      <p>Last name: {props.user.last_name}</p>
      <img src={props.user.image_url} />
      <p>Email: {props.user.email}</p>
      <p>Phone number: {props.user.phone_number}</p>
      <p>Personal website: {props.user.personal_website_url}</p>
      <p>LinkedIn: {props.user.linkedin_url}</p>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "TwitterDev",
        }}
        options={{
          height: "400",
        }}
      />
    </div>
  );
}
