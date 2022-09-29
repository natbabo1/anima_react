import profileImage from '../../assets/images/placeholderAvatar.jpg';
function Avatar({ src, size }) {
  return (
    <img
      src={src || profileImage}
      className="rounded-circle cursor-pointer"
      width={size || 50}
      height={size || 50}
      alt="user"
    />
  );
}

export default Avatar;
