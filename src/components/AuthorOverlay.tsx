import clsx from 'clsx';

const positionalCSS = {
  'top-left': 'left-0 top-0 rounded-br-xl text-left',
  'top-right': 'right-0 top-0 rounded-bl-xl text-right',
  'bottom-left': 'left-0 bottom-0 rounded-tr-xl text-left',
  'bottom-right': 'right-0 bottom-0 rounded-tl-xl text-right',
};

type AuthorOverlayProps = {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const AuthorOverlay = ({ position }: AuthorOverlayProps) => {
  return (
    <div
      className={clsx(
        'absolute bg-slate-900 bg-opacity-70 p-4 text-sm text-slate-300',
        positionalCSS[position],
      )}
    >
      <p>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          className='font-bold text-slate-200'
        >
          Frontend Mentor
        </a>
      </p>
      <p>
        Coded by{' '}
        <a
          href='https://github.com/afonsopimenta'
          target='_blank'
          className='font-bold text-slate-200'
        >
          Afonso Pimenta
        </a>
      </p>
    </div>
  );
};

export default AuthorOverlay;
