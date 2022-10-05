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
          <h2 className="text-2xl font-bold text-primary-1 mb-6">ハード班 Mechanical Engineer</h2>
          <h2 className="text-2xl font-bold text-primary-1 mb-6">回路班 Electrical Engineer</h2>
        </div>
      </>
    }
  />
);
