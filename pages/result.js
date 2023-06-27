import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ResultContext } from "../components/result";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Print from "@/components/print";

function Result() {
  const [isClient, setIsClient] = useState(false);
  const { results, complementary, totalWeight, emptyWeight } =
    useContext(ResultContext);

  const PrintData = {
    length: complementary.length + ' mm',
    width: complementary.width + ' mm',
    height: complementary.height + ' mm',
    weight: totalWeight.totGVW + ' kg',
    vehicle: emptyWeight.totEVW + ' kg',
    heaviestAxisLoad: results.heaviestAxisLoad + ' kg',
    roadClass: results.roadClass,
    payload: results.payload + ' kg',
  };

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5">
        <div className="pt-10 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">
          Terima Kasih telah menggunakan aplikasi kami
        </div>
        <Image
          src="/img/Leader-pana.svg"
          className="mb-5"
          width={400}
          height={300}
        />
      </div>

      <div className="flex flex-wrap p-3">
        <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-3">
          <div className="bg-white rounded-lg overflow-hidden">
            <h2 className="font-bold text-xl mb-5 text-center">
              Muatan Sumbu Terberat
            </h2>
            <Image
              src="/icon/13426002571547643846.svg"
              className="mb-5 m-auto"
              width={150}
              height={75}
            />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-5 text-center">
                {results.heaviestAxisLoad}
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-3">
          <div className="bg-white rounded-lg overflow-hidden">
            <h2 className="font-bold text-xl mb-5 text-center">Kelas Jalan</h2>
            <Image
              src="/icon/143590661582779206.svg"
              className="mb-5 m-auto"
              width={150}
              height={75}
            />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-5 text-center">
                {results.roadClass}
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-3">
          <div className="bg-white rounded-lg overflow-hidden">
            <h2 className="font-bold text-xl mb-5 text-center">Daya Angkut</h2>
            <Image
              src="/icon/191950655616354821474533.svg"
              className="mb-5 m-auto"
              width={150}
              height={75}
            />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-5 text-center">
                {results.payload}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
      <ul class="max-w-xl space-y-1 font-light text-black list-inside p-4">
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    MST tidak boleh melebihi dari kemampuan ban, maksimal sama. Periksa kode ban yang digunakan pada kendaraan anda
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Perhatikan kapasitas muatan yang bisa dibawa kendaraan anda. Ini untuk memelihara kendaraan anda dari kerusakan komponen akibat kelebihan muatan
                                </li>
                            </ul>
      </div>

      <div className="flex justify-center mt-5">
      <a type="button" className="inline-flex items-center justify-center w-[10rem] mb-10 px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
        {isClient && (
          <PDFDownloadLink
            document={<Print data={PrintData} />}
            fileName="result.pdf"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Simpan"
            }
          </PDFDownloadLink>
        )}
        </a>
      </div>
    </>
  );
}
export default Result;
