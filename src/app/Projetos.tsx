import React from "react";
import SubTitle from "@/components/SubTitle";
import { Link as IconLink } from 'lucide-react';
import Link from 'next/link';

export default function Projetos() {
  return (
    <>
      <div className="container-bg gap-10 rounded-md border-color border-2 flex flex-col w-full items-start justify-start p-10">
        <div className="flex flex-col">
          <h1 className="text-primary text-[30px] font-bold">
            Projetos
          </h1>
          <SubTitle subTitle="Trabalhos Pessoais Desenvolvidos." />
        </div>
        <div className="flex flex-col md:flex-row container-bg-tertiary w-full h-full py-4 px-4 rounded-md gap-4">
          <div className="flex justify-center md:justify-start">
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img
                className="rounded-md"
                src="/front-automacao.png"
                alt="HTML"
                width={250}
                height={250}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex flex-col pb-2 w-full">
              <div className="flex flex-row w-full justify-between">
                <p className="text-primary font-semibold break-all whitespace-normal">
                  Sistema de Automação
                </p>
                <a
                  href="https://front-automation-cad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <IconLink size={20} color="#5B5B5B" strokeWidth={2} />
                  </button>
                </a>
              </div>
              <p className="text-secondary">
                Sistema de Automação de Processos de uma empresa de pequeno porte.
              </p>
            </div>
            <div>
              <p className="text-secondary font-semibold text-sm pb-1">
                Tecnologias
              </p>
              <ul className="list-disc list-inside text-tertiary font-normal indent-5 break-all whitespace-normal">
                <li>Nextron.JS</li>
                <li>Typescript</li>
                <li>React.JS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
