/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary-gray md:min-h-dvh h-screen w-full flex justify-center items-center">
      <div className="qr-scanner flex flex-col w-10/12 md:w-5/12 lg:w-3/12 bg-primary-white p-3 rounded-xl shadow-md">
        <img
          src={"./images/image-qr-code.png"}
          className="w-full h-full rounded-xl"
          alt="qr-code-scanner"
        />
        <div className="p-3">
          <h2 className="font-bold font-outfit text-center my-2 text-lg">
            Improve your front-end skills by building projects
          </h2>
          <p className="font-thin text-sm text-slate-500 font-outfit text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
