'use client';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/components/ui/use-toast';

export default function SignOutLink() {
  const { toast } = useToast();

  const handleLogout = () => toast({ description: 'Logging Out...' });

  return (
    <SignOutButton>
      <Link className="w-full text-left" href="/" onClick={handleLogout}>
        Log Out
      </Link>
    </SignOutButton>
  );
}
