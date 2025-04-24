import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <Avatar>
      <AvatarImage src="/profile-2d.png" alt="profile" aria-label="profile" />
      <AvatarFallback>SSN</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
