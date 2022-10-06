import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';

export const Members = () => (
  <MainLayout
    className="lg:block mt-n30"
    main={
      <>
        <Profile />
        <div className="school p-4 lg:p-10 bg-primary-1">
          <h2 className="text-2xl font-bold text-primary-1 mb-6">ソフト班 Software Engineer</h2>
          <div className='w-25 p-3'>
            <div><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
            <div><p>メンバー</p></div>
          </div>
          <h2 className="text-2xl font-bold text-primary-1 mb-6 mt-6">ハード班 Mechanical Engineer</h2>
          
          <h2 className="text-2xl font-bold text-primary-1 mb-6 mt-6">回路班 Electrical Engineer</h2>
          
        </div>
      </>
    }
  />
);
