import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const Profile = useContext(ProfileContext);
  return (
    <>
      <h1>Profile</h1>
      <p>Helo, {Profile}</p>
    </>
  );
}
