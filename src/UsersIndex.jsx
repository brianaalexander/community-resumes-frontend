export function UsersIndex(props) {
  return (
    <div>
      <h1>All users</h1>
      {props.users.map((user) => (
        <div id="users-index">
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <img src={user.image_url} />
          <p>{user.personal_website_url}</p>
          <p>{user.linkedin_url}</p>
          <button onClick={() => props.onSelectUser(user)}>More info</button>
        </div>
      ))}
    </div>
  );
}
