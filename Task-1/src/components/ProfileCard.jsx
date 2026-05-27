const ProfileCard = ({name, role="Software Engineer", location, profileImage}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{location}</p>
      <img src={profileImage} alt="Person Image" width="200px"/>
    </div>
  )
}

export default ProfileCard
