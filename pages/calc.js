import Image from 'next/image';
import React, { useState, useContext } from 'react';
import { ResultContext } from "../components/result";

function Calc() {
    const {  
        handleTotalFront,
        handleTotalRear,
        handleEmptyFront,
        handleEmptyRear,
        handleComplementary,
        calculateResults,
        totalWeight,
        emptyWeight,
        complementary
    } = useContext(ResultContext);

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    /*const handleTotalGVW = (event) =>
        setTotalWeight({
            ...totalWeight,
            totGVW: event.target.value,
            ...(Number(totalWeight.totGVW) >= 0 && {
                frontGVW: (0.66 * Number(event.target.value)).toFixed(0),
                rearGVW: (0.4 * Number(event.target.value)).toFixed(0)
            }),

        });*/

    const handleSubmitValues = (e) => {
        e.preventDefault();
        if (isValid()) {
            setError('');
            calculateResults();
        }
    };

    const isValid = () => {
        const { frontGVW, rearGVW, totGVW } = totalWeight;
        const { frontEVW, rearEVW, totEVW } = emptyWeight;
        const { length, width, height, wheelbase, seat } = complementary;
        let actualError = '';
        // Validate if there are values
        if (!frontGVW || !rearGVW || !totGVW || !frontEVW || !rearEVW || !totEVW || !length || !width || !height || !wheelbase || !seat) {
            actualError = 'Semua nilai diperlukan';
        }
        // Validade if the values are numbers
        if (isNaN(frontGVW) || isNaN(rearGVW) || isNaN(totGVW) || isNaN(frontEVW) || isNaN(rearEVW) || isNaN(totEVW) || isNaN(length) || isNaN(height) || isNaN(width) || isNaN(wheelbase) || isNaN(seat)) {
            actualError = 'Semua nilai harus berupa angka yang valid';
        }
        // Validade if the values are positive numbers
        if (Number(frontGVW) < 0 || Number(rearGVW) < 0 || Number(totGVW) < 0 || Number(frontEVW) < 0 || Number(rearEVW) < 0 || Number(totEVW) < 0 || Number(length) < 0 || Number(width) < 0 || Number(height) < 0 || Number(wheelbase) < 0 || Number(seat) < 0
        ) {
            actualError = 'Semua nilai harus berupa angka positif';
        }
        if (actualError) {
            setError(actualError);
            setShow(true);
            return false;
        }
        return true;
    };
    return (
        <>
            {
                show ?
                    <div className="flex justify-center items-start overflow-x-hidden overflow-y-auto fixed inset-0 z-50 m-2">
                        <div class="flex p-4 w-1/2 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                            <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                                {error}
                            </div>
                            <button onClick={() => setShow(!show)} type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                    : null
            }

            <div>
                <form onSubmit={handleSubmitValues}>
                    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 place-items-center gap-1">
                        <div className="flex flex-col justify-center items-center p-10">
                            <div className="pt-5 mb-5 text-3xl font-bold text-center text-blue-800">Mulai perhitungan</div>
                            <Image src="/img/simulation_truck.svg" className="mb-5" width={300} height={200} />
                            <ul class="max-w-md space-y-1 font-light text-black list-inside dark:text-yellow-50">
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Muatan sumbu kendaraan adalah jumlah tekanan roda dari satu sumbu kendaraan terhadap jalan
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Muatan sumbu terberat salah satu dari sumbu kendaraan yang terbesar dan menjadi acuan untuk menetapkan kelas kendaraan
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center items-center p-10">
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">depan</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-pink-50 hover:bg-pink-100 active:bg-pink-100 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={totalWeight.frontGVW}
                                        onChange={handleTotalFront}
                                        name='frontGVW'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">belakang</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-pink-50 hover:bg-pink-100 active:bg-pink-100 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={totalWeight.rearGVW}
                                        onChange={handleTotalRear}
                                        name='rearGVW'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">JBB</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-red-400 hover:bg-red-500 active:bg-red-500 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={totalWeight.totGVW}
                                        //onChange={handleTotalGVW}
                                        name='totGVW'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">depan</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-pink-50 hover:bg-pink-100 active:bg-pink-100 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={emptyWeight.frontEVW}
                                        onChange={handleEmptyFront}
                                        name='frontEVW'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">belakang</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-pink-50 hover:bg-pink-100 active:bg-pink-100 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={emptyWeight.rearEVW}
                                        onChange={handleEmptyRear}
                                        name='rearEVW'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">BK</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-red-400 hover:bg-red-500 active:bg-red-500 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={emptyWeight.totEVW}
                                        name='totEVW'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">panjang</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-400 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={complementary.length}
                                        onChange={handleComplementary}
                                        name='length'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">lebar</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-400 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={complementary.width}
                                        onChange={handleComplementary}
                                        name='width'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">tinggi</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-400 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={complementary.height}
                                        onChange={handleComplementary}
                                        name='height'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">jarak sumbu</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-orange-300 hover:bg-orange-400 active:bg-orange-400 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={complementary.wheelbase}
                                        onChange={handleComplementary}
                                        name='wheelbase'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">.</label>
                                <input
                                    className="w-20 h-20 mx-2 my-1 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full font-medium text-[14px] text-center"
                                    type='submit'
                                    value='Calc'
                                />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-center text-[10px]">tempat duduk</label>
                                    <input
                                        className="w-20 h-20 mx-2 my-1 bg-orange-300 hover:bg-orange-400 active:bg-orange-400 focus:outline-none rounded-full font-medium text-[14px] text-center"
                                        value={complementary.seat}
                                        onChange={handleComplementary}
                                        name='seat'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="w-1/5 h-1 bg-gray-400 rounded mt-2 mb-2 mx-auto"></div>
            <div id="faq" className="pt-20 mb-20 text-3xl font-bold text-center text-blue-800">Bagaimana menemukannya</div>
            <div className="flex flex-wrap p-3">
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-3">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <h2 className="font-bold text-xl mb-5 text-center">Ukur</h2>
                        <Image src="/icon/3074519821579069698.svg" className="mb-5 m-auto" width={150} height={75} />
                        <div className="p-4">
                            <p className="text-2xl text-center font-light text-black lg:pb-0 lg:text-lg lg:p-0 lg:pl-0 lg:pr-0">Lakukan pengukuran terhadap dimensi kendaraan</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-3">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <h2 className="font-bold text-xl mb-5 text-center">Timbang</h2>
                        <Image src="/icon/13426002571547643846.svg" className="mb-5 m-auto" width={150} height={75} />
                        <div className="p-4">
                            <p className="text-2xl text-center font-light text-black lg:pb-0 lg:text-lg lg:p-0 lg:pl-0 lg:pr-0">Lakukan penimbangan terhadap berat kendaraan</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-3">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <h2 className="font-bold text-xl mb-5 text-center">Hitung</h2>
                        <Image src="/icon/198337025116354197524526.svg" className="mb-5 m-auto" width={150} height={75} />
                        <div className="p-4">
                            <p className="text-2xl text-center font-light text-black lg:pb-0 lg:text-lg lg:p-0 lg:pl-0 lg:pr-0">Lakukan perhitungan dengan kalkulator yang disediakan</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calc