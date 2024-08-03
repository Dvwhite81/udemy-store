import Image from 'next/image';
import { LuUser2 } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';

export default async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        className="w-6 h-6 rounded-full object-cover"
        src={profileImage}
        alt="user image"
        width={6}
        height={6}
      />
    );
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
