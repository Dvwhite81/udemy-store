import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from 'react-icons/lu';

export default async function CartButton() {
  const numItemsInCart = 0;

  return (
    <Button
      className="flex justify-center items-center relative"
      variant="outline"
      size="icon"
      asChild
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
