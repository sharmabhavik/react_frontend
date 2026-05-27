// import React from react;
const UserDetails = ({ name, isOnline, isPremium, isNewUser, role }) => {
  // If Statement
  let roleBadge = null;
  if (role === "Admin") {
    roleBadge = <span>Admin</span>;
  } else if (role === "Moderate") {
    roleBadge = <span>Moderate</span>;
  } else if (role === "VIP") {
    roleBadge = <span>VIP</span>;
  }

  if (isOnline) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Status: Active</p>
        {roleBadge}
        <p>Available for Chat</p>
        <button>Send Message</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>Status: Inactive</p>
      <p>Not Available for Chat</p>
      <small>Check it Later</small>
    </div>
  );

  // Ternary Operator
  /* return (
    <>
      <h2>{name}</h2>
      {isNewUser && <span>Welcome New User {name}</span>}
      {isPremium && <span>Premium Membership</span>}
      {isOnline ? <span>Status: Active</span> : <span>Status: Inactive</span>}
      {isOnline ? <p>Can talk Now</p> : <p>Not Available</p>}
      {isOnline ? (
        <button>Send Message</button>
      ) : (
        <small>Check Back Later</small>
      )}
    </>
  ); */
};

export default UserDetails;
