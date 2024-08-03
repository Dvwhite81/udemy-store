'use client';

import { useFormStatus } from 'react-dom';
import { ReloadIcon } from '@radix-ui/react-icons';
import { SignInButton } from '@clerk/nextjs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { LuPenSquare, LuTrash2 } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type BtnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: BtnSize;
};

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn('capitalize', className)}
      size={size}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type ActionType = 'edit' | 'delete';

export function IconButton({ actionType }: { actionType: ActionType }) {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'delete':
        return <LuTrash2 />;
      case 'edit':
        return <LuPenSquare />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      className="p-2 cursor-pointer"
      type="submit"
      variant="link"
      size="icon"
    >
      {pending ? <ReloadIcon className=" animate-spin" /> : renderIcon()}
    </Button>
  );
}
