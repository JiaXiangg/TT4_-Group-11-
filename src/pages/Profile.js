import React, { useState } from "react";
import UserService from "../services/user.service";

const Profile = (props) => {
  const currentUser = UserService.getCurrentUser();

  return (
  <div>
    <h3>
			<strong>{currentUser.username}</strong> Profile
		</h3>
    <p>
    <strong>Customer ID:</strong> {currentUser.custID}
    </p>
    <p>
    <strong>Account Key:</strong> {currentUser.accountKey}
    </p>
  </div>)
}

export default Profile;