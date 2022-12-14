
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';

export const About = () => (
  <MainLayout
    className="lg:block mt-n30"
    main={
      <>
        <Profile />
        <div className="school p-4 lg:p-10 bg-primary-1">
          <h2 className="text-2xl font-bold text-primary-1 mb-6">沿革</h2>
          <div className="tree_container">
            <div className="timeline-item" date-is="2020">
              <h1>Ri-one ssl</h1>
              <h1>(small size league)発足</h1>
              
              
            </div>

            <div className="timeline-item" date-is="2021">
              <h1>アジア・パシフィック大会</h1>
              <p>
                愛知（名古屋）大会 ５位入賞
                
              </p>
            </div>
            <div className="timeline-item" date-is="2022">
              <h1>７月</h1>
              <p>タイ・バンコク大会   Division B ５位</p>
              <h1>９月</h1>
              <p>Robocup JpanOpen 2022    Division A ３位</p>
              
            </div>
            <div className="timeline-item" date-is="2023"></div>
          </div>

          <h2 className="text-2xl font-bold text-primary-1 mb-6 mt-6">Event</h2>
          <div className="tree_container">
            <div className="timeline-item" date-is="2022"></div>
            <div className="timeline-item" date-is="2022-8">
              <p>
                立命館大学オープンキャンパス・サマースクール
                <br /> 「サッカーロボットと戦おう」
              </p>
            </div>
            <div className="timeline-item" date-is="2022-9">
              <p>
                KC3 
              </p>
            </div>
          </div>
        </div>
      </>
    }
  />
);
