import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <>
      <main>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center gap-1">
          <div className="flex flex-col justify-center items-center p-10">
          <p className="pb-10 text-4xl font-bold text-center text-blue-800 lg:text-3xl">Axle Load Calculation</p>
            <p className="p-3 text-2xl text-center font-light text-black lg:w-5/6 lg:pb-0 lg:text-lg lg:p-0 lg:pl-0 lg:pr-0">Kelebihan muatan pada umumnya terdapat pada mobil barang. Berikan beban kendaraanmu sesuai kemampuan, gunakan aplikasi tersebut untuk mengetahuinya.</p>
          </div>
          <div className="flex flex-col justify-center items-center p-10 lg:w-5/6">
            <Image src="/img/Vintage truck-amico (1).svg" className="mb-5" width={600} height={400} />
          </div>
        </div>

        <div class="w-1/5 h-1 bg-gray-400 rounded mt-2 mb-2 mx-auto"></div>

        <div id="faq" className="pt-20 mb-20 text-4xl font-bold text-center text-blue-800 lg:text-3xl">Bagaimana ini bekerja</div>

        <div className="lg:items-center lg:flex lg:flex-row-reverse lg:justify-center">
          <div className="flex flex-col justify-center items-center p-10">
            <p className="p-3 text-4xl font-bold leading-relaxed text-center text-blue-800 lg:pb-4 lg:text-3xl lg:pl-0 lg:text-left">Dimana saya memulai</p>
            <p className="p-3 text-2xl leading-10 text-center font-light text-black lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">Mulailah perhitungan ini secara gratis dengan klik <span className="font-bold cursor-pointer" type="button" onClick={() => router.push('/calc')}>tautan</span> ini</p>
          </div>
          <div className="flex flex-col justify-center items-center p-10">
            <Image src="/img/Calculator-pana (1).svg" className="mb-5" width={400} height={200} />
          </div>
        </div>
        <div className="lg:items-center lg:flex lg:flex-row lg:justify-center">
          <div className="flex flex-col justify-center items-center p-10">
            <p className="p-3 text-4xl font-bold leading-relaxed text-center text-blue-800 lg:pb-4 lg:text-3xl lg:pl-0 lg:text-left">Saya bingung</p>
            <p className="p-3 text-2xl leading-10 text-center font-light text-black lg:w-5/6 lg:pb-0 lg:text-lg lg:text-left lg:p-0 lg:pl-0 lg:pr-0">Bacalah panduan sebelum anda menghitung pada <span className="font-bold cursor-pointer" type="button" onClick={() => router.push('https://drive.google.com/file/d/15-vKJpKUXa5Mdtqd7oX1d-8zoTJB9JvA/view?usp=sharing')}>tautan</span> ini</p>
          </div>
          <div className="flex flex-col justify-center items-center p-10">
            <Image src="/img/Documents-rafiki.svg" className="mb-5" width={400} height={200} />
          </div>
        </div>
      </main>
    </>
  )
}
