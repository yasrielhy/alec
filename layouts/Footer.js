import { FaInstagram, FaGithub, FaFacebook, FaHeart } from 'react-icons/fa';
export default function Footer() {
    return (
        <>
        <div className="flex items-center justify-center my-5 space-x-6">
                <a
                  href="https://www.github.com/yasrielhy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-black"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/yasrielhy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-red-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100077913663866"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-blue-600"
                >
                  <FaFacebook />
                </a>
              </div>
			<div className="flex flex-row justify-center items-center text-center mb-5 p-3">
				<p className=" text-black font-light">
					© 2023 All rights reserved | Alec by yasrielhy
				</p>
			</div>
        </>
    )
};