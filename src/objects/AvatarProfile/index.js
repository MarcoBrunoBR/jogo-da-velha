import React from "react";
import "./styles.css";

const AvatarProfile = ({ src, alt }) => (
  <img className="about-avatar" src={src} alt={alt} />
);

export default AvatarProfile;
