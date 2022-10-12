import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';

export const Members = () => (
  <MainLayout
    className="lg:block mt-n30"
    main={
      <>
        <Profile />
        <div className="school p-4 lg:p-10 bg-primary-1">
          <div className='ssl_team'>
            <h2 className="text-2xl font-bold text-primary-1 mb-1">ソフト班 Software Engineer</h2>
            <div className='ssl_members'>
              <div className='ssl_member'>
                <div className='member_face'><img src="/assets/memmbers/tamagoham.PNG" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>Naitou Yuzuru</div>
                <div className='member_th'>18期 （Ri-one団体長）</div>
                <div className='member_introduction'>SSLのロボットとの通信を担当しています!</div>
              </div>
              
              <div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>メンバー</div>
                <div className='member_introduction'>ハード班、回路班のメンバーでもある。あああああああああああああああああああああ</div>
              </div>
              <div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>メンバー</div>
                <div className='member_introduction'>ハード班、回路班のメンバーでもある。あああああああああああああああああああああ</div>
              </div>
              <div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>メンバー</div>
                <div className='member_introduction'>ハード班、回路班のメンバーでもある。あああああああああああああああああああああ</div>
              </div>
            </div>
          </div>
          <div className='ssl_team'>
            <h2 className="text-2xl font-bold text-primary-1 mb-6 mt-6 mb-6">ハード班 Mechanical Engineer</h2>
            <div className='ssl_member'>
                <div className='member_face'><img src="/assets/memmbers/Matsumoto.PNG" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>Matsumoto</div>
                <div className='member_th'>17期</div>
                <div className='member_introduction'>ソフト、回路も担当しています！</div>
              </div>
              <div className='ssl_member'>
                <div className='member_face'><img src="/assets/memmbers/tomix.jpg" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>Tomioka Daiki</div>
                <div className='member_th'>18期</div>
                <div className='member_introduction'>ソフト、回路も担当しています！</div>
              </div>
              <div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>Murai Ryosuke</div>
                <div className='member_th'>19期</div>
                <div className='member_introduction'>ソフト、回路も担当しています！</div>
              </div><div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>Otake Syutaro</div>
                <div className='member_th'>19期</div>
                <div className='member_introduction'>ソフト、回路も担当しています！</div>
              </div>
          </div>
          <div className='ssl_team'>
            <h2 className="text-2xl font-bold text-primary-1 mb-6 mt-6 mb-6">回路班 Electrical Engineer</h2>
             <div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>メンバー</div>
                <div className='member_th'>19期</div>
                <div className='member_introduction'>ハード班、回路班のメンバーでもある。あああああああああああああああああああああ</div>
              </div>
              <div className='ssl_member'>
                <div className='member_face'><img src="https://avatars.githubusercontent.com/u/71633059?s=280&v=4" className='rounded' alt="メンバーA" /></div>
                <div className='member_name'>メンバー</div>
                <div className='member_th'>19期</div>
                <div className='member_introduction'>ハード班、回路班のメンバーでもある。あああああああああああああああああああああ</div>
              </div>
          </div>
        </div>
      </>
    }
  />
);
