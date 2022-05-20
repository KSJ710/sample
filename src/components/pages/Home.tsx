import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import damy from '/public/damy_1600_1000.png';
import 'swiper/css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MainSlid />
      <div className="flex">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <p>ようこそ</p>
              <p>買い物をするためにはログインしてください。</p>
              <button>ログイン</button>
              <Link href="#">
                <a>アカウント作成</a>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={damy} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={damy} alt="" />
          </SwiperSlide>
        </Swiper>
        <div></div>
      </div>
    </>
  );
}

function MainSlid() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={damy} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={damy} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={damy} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
