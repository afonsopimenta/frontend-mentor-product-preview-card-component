'use client';

import Image from 'next/image';
import productImageMobile from '@/assets/image-product-mobile.jpg';
import productImageDesktop from '@/assets/image-product-desktop.jpg';
import cartSVG from '@/assets/icon-cart.svg';

const ProductPreviewCard = () => {
  return (
    <div className='w-full max-w-[37.5rem] overflow-hidden rounded-md bg-white md:grid md:grid-cols-2'>
      <div>
        <Image
          src={productImageMobile}
          alt='perfume bottle laying flat with leaves around it'
          className='md:hidden'
        />
        <Image
          src={productImageDesktop}
          alt='perfume bottle laying flat with leaves around it'
          className='h-full object-cover max-md:hidden'
        />
      </div>
      <div className='p-6 font-montserrat text-sm text-blue-gray md:p-8'>
        <p className='mb-3 text-xs uppercase tracking-[0.25rem] md:mb-5'>
          Perfume
        </p>
        <h1 className='mb-4 font-fraunces text-3xl font-bold leading-8 text-blue-black md:mb-6'>
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className='mb-6 max-w-prose leading-6 md:mb-8'>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className='mb-5 flex items-center gap-5 md:mb-8'>
          <p className='font-fraunces text-3xl font-bold leading-8 text-aquamarine-light'>
            $149.99
          </p>
          <p className='line-through'>$169.99</p>
        </div>
        <button
          onClick={() => console.log('Add to cart clicked')}
          className='flex w-full items-center justify-center gap-3 rounded-md bg-aquamarine-light px-8 py-4 font-bold text-white transition-colors hover:bg-aquamarine-dark'
        >
          <Image
            src={cartSVG}
            alt=''
            width={16}
            height={16}
            className='h-4 w-4'
          />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
