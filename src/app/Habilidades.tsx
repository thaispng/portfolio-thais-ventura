import React from "react";
import SubTitle from "@/components/SubTitle";
import { Speech, Users, ListChecks, Book } from 'lucide-react';
export default function Habilidades() {
  return (
    <>
      <div className="container-bg gap-10 rounded-md border-color border-2 flex flex-col w-full items-start justify-start p-10 ">
        <div className="flex flex-col">
          <h1 className="text-primary text-[30px] font-bold">
            Habilidades
          </h1>
          <SubTitle subTitle="Habilidades Técnicas e Pessoais." />
        </div>
        <div className="flex flex-col w-full gap-1 ">
          <h1 className="text-secondary text-[22px] font-bold pb-4">
            Técnicas
          </h1>
          <div className="grid grid-cols-4 gap-4 w-full sm:grid-cols-8">
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/git.svg" alt="Git" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/github.svg" alt="GitHub" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/html5.svg" alt="HTML5" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/css3.svg" alt="CSS3" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/tailwindcss.svg" alt="TailwindCSS" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/js.svg" alt="JavaScript" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/typescript.svg" alt="TypeScript" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/reactjs.svg" alt="ReactJS" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/next.svg" alt="Next.js" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/nodejs.svg" alt="Node.js" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/nestjs.svg" alt="NestJS" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/postgresql.svg" alt="PostgreSQL" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/mongodb.svg" alt="MongoDB" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/figma.svg" alt="Figma" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/jira.svg" alt="Jira" width={30} height={30} />
            </div>
            <div className="container-bg-tertiary p-2 rounded-md flex justify-center items-center">
              <img src="/aws.svg" alt="AWS" width={30} height={30} />
            </div>
          </div>
          <div className="flex flex-col pt-10">
            <h1 className="text-secondary text-[22px] font-bold pb-4">
              Pessoais
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 p-2 gap-4">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex container-bg-tertiary rounded-md justify-center items-center w-[50px] p-2">
                  <Speech size={30} color="#5B5B5B" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-primary font-semibold break-all whitespace-normal">
                    Comunicação
                  </p>
                  <p className="text-tertiary font-normal break-all whitespace-normal">
                    Comunicar-se de forma clara e objetiva
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex container-bg-tertiary rounded-md justify-center items-center w-[50px] p-2">
                  <Users size={30} color="#5B5B5B" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-primary font-semibold break-all whitespace-normal">
                    Trabalho em equipe
                  </p>
                  <p className="text-tertiary font-normal break-all whitespace-normal">
                    Trabalhar de forma colaborativa
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex container-bg-tertiary rounded-md justify-center items-center w-[50px] p-2">
                  <ListChecks size={30} color="#5B5B5B" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-primary font-semibold break-all whitespace-normal">
                    Solucionar problemas
                  </p>
                  <p className="text-tertiary font-normal break-all whitespace-normal">
                    Resolver problemas de forma criativa
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex container-bg-tertiary rounded-md justify-center items-center w-[50px] p-2">
                  <Book size={30} color="#5B5B5B" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-primary font-semibold break-all whitespace-normal">
                    Aprendizado contínuo
                  </p>
                  <p className="text-tertiary font-normal break-all whitespace-normal">
                    Estar sempre disposta a aprender
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
