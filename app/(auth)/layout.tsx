import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            width={224}
            height={82}
            alt="logo"
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Welcome to La Nubecita</h1>
            <p className="body-1">
              La Nubecita is a simple cloud storage service that allows you to
              store your files in the cloud and access them from anywhere.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            width={224}
            height={224}
            alt="cloud"
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section>

      {children}
      </section>
    </div>
  );
};

export default layout;
