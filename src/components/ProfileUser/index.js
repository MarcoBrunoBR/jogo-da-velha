import React from "react";
import "./styles.css";
import AvatarProfile from "../../objects/AvatarProfile";
import SocialMedias from "../../objects/SocialMedias";

const ProfileUser = ({ photo }) => (
  <dl className="profile-user">
    <dd className="photo">
      <AvatarProfile src={photo} alt="Profile do Marco Bruno" />
    </dd>
    <dt className="title">Marco Bruno</dt>
    <dd className="description">
      Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho como streamer
      de código, instrutor e dev na CollabCode
    </dd>
    <dd className="medias">
      <SocialMedias />
    </dd>
  </dl>
);

export default ProfileUser;
