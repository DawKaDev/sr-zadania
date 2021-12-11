import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const UsersContainer = () => {
  const [data, setData] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("./users.json")
      .then((response)=> response.json())
      .then((data) => setData(data.users))
    }
    fetchData();
    setSearchData(data);
  },[])

  useEffect(() => {
    setSearchData(data.filter(user => {
      const userFullName = user.firstName + " " + user.lastName;
      if(userFullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
        return true
      }
    return false;
    }))
    setActiveUser({});
  },[data, searchText])

  return (
    <div className="container">
      <div className="users">
        <UsersContainer.UsersList data={searchData} activeUser={activeUser} selectAction={setActiveUser}/>
        <UsersContainer.UserSearch searchAction={setSearchText}/>
      </div>
      <UsersContainer.User user={activeUser}/>
    </div>
  )
}

UsersContainer.UsersList = ({data, activeUser, selectAction}) => {
  return (
    <ul className="users__list">
      {data.map((user, index)=> (
        <li key={index} className={`${user === activeUser ? "active" : ""}`} onClick={()=>selectAction(user)}>{user.firstName} {user.lastName}</li>
      ))}
    </ul>
  )
}

UsersContainer.User = ({user}) => {
  return (
    <div className="user">
    {Object.keys(user).length > 0
      ? <>
          <p className="user__name">{user.firstName} {user.lastName}</p>
          <p className="user__age">Age: {user.age}</p>
          <p className="user__gender">Gender: {user.gender}</p>
          <Link to={{
            pathname: "/user-profile",
            state: {
              user
            }
            }} className="user__link">show profile</Link>
        </>
      : <p>Select user</p>}
    </div>
  )
}

UsersContainer.UserSearch = ({searchAction}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchAction(e.target.searchUser.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchUser">Search</label>
      <input type="text" name="searchUser" id="searchUser"/>
      <button type="button" onClick={()=>searchAction("")}>Reset</button>
    </form>
  )
}