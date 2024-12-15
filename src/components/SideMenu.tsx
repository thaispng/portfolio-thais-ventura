"use client";
import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Link from "next/link";
import {
  Linkedin,
  Github,
  Smartphone,
  GraduationCap,
  House,
  PersonStanding,
  Brain,
  BriefcaseBusiness,
  Folder,
  Download,
} from "lucide-react";


interface SideMenuProps {
  className?: string;
}


export default function SideMenu({
  className,
}: SideMenuProps = {
    className: "",
  }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-auto h-full lg:sticky lg:top-5 justify-between items-center p-5 container-bg rounded-md border-color border-2">
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-auto py-3">
            <img src="/FemaleMemojis.svg" alt="HTML" width={150} height={150} />
          </div>
          <div>
            <Title title="Thais dos Santos Ventura" />
            <SubTitle subTitle="Desenvolvedora Front-end" />
          </div>
        </div>
        <div className="flex flex-col">
          <Title title="Informações de contato" />
          <div className="flex flex-row gap-2 w-full py-1 px-2 justify-start items-center">
            <Linkedin className="text-tertiary" size={20} strokeWidth={1.5} />
            <a
              className="text-tertiary font-normal"
              href="https://www.linkedin.com/in/sstv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/sstv/
            </a>
          </div>
          <div className="flex flex-row gap-2 w-full py-1 px-2 justify-start items-center">
            <Github className="text-tertiary" size={20} strokeWidth={1.5} />
            <a
              className="text-tertiary font-normal"
              href="https://github.com/thaispng"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thaispng
            </a>
          </div>
          <div className="flex flex-row gap-2 w-full py-1 px-2 justify-start items-center">
            <Smartphone className="text-tertiary" size={20} strokeWidth={1.5} />
            <a
              className="text-tertiary font-normal"
              target="_blank"
              rel="noopener noreferrer"
            >
              (85) 9 9655-3272
            </a>
          </div>
          <div className="flex flex-row gap-2 w-full py-1 px-2 justify-start items-center">
            <GraduationCap
              className="text-tertiary"
              size={20}
              strokeWidth={1.5}
            />
            <a
              className="text-tertiary font-normal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Análise e Desenvolvimento de Sistemas
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Title title="Navegação" />
          <button
            onClick={() => scrollToSection("inicial")}
            className="flex w-full gap-2 justify-start items-center button-transparent py-2 px-2 text-tertiary font-normal rounded-sm"
          >
            <House size={20} strokeWidth={1.5} />
            Inicial
          </button>
          <button
            onClick={() => scrollToSection("habilidades")}
            className="flex w-full gap-2 justify-start items-center button-transparent py-2 px-2 text-tertiary font-normal rounded-sm"
          >
            <Brain size={20} strokeWidth={1.5} />
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection("experiencia")}
            className="flex w-full gap-2 justify-start items-center button-transparent py-2 px-2 text-tertiary font-normal rounded-sm"
          >
            <BriefcaseBusiness size={20} strokeWidth={1.5} />
            Experiências
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className="flex w-full gap-2 justify-start items-center button-transparent py-2 px-2 text-tertiary font-normal rounded-sm"
          >
            <Folder size={20} strokeWidth={1.5} />
            Projetos
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full py-4">
        <p className="flex flex-row justify-center gap-2 text-tertiary font-normal text-xs w-full">
          Feito com ❤️ por
          <span className="font-semibold text-[#9C42AB] w-auto">
            Thais Ventura.
          </span>
        </p>
      </div>
    </div>
  );
}
