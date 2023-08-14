import PageContainer from '@/components/PageContainer';
import ProductPreviewCard from './_components/ProductPreviewCard';

const Home = () => {
  return (
    <main className='h-full'>
      <PageContainer className='h-full'>
        <div className='grid min-h-full place-items-center'>
          <ProductPreviewCard />
        </div>
      </PageContainer>
    </main>
  );
};

export default Home;
