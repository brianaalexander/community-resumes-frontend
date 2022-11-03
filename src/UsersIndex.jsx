export function UsersIndex(props) {
  return (
    <div>
      <h1>All users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <img src={user.image_url} />
          <p>{user.personal_website_url}</p>
        </div>
      ))}
    </div>
  );
}
