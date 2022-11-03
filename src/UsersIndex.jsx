import { useState } from "react";

export function UsersIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div id="users-index">
      <h1>All Users</h1>
      Search filter:{" "}
      <input
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        type="text"
        list="first_name"
      />
      <datalist id="first_name">
        {props.users.map((user) => (
          <option key={user.id}>{user.first_name}</option>
        ))}
      </datalist>
      <div className="row">
        {props.users
          .filter((user) => user.first_name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((user) => (
            <div className="col-md-3 mb-4" key={user.id}>
              <div className="card">
                <img src={user.image_url} className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-name">
                    {user.first_name} {user.last_name}
                  </h2>
                  <p className="card-text">{user.personal_website_url}</p>
                  <a className="btn btn-primary" onClick={() => props.onSelectUser(user)}>
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
