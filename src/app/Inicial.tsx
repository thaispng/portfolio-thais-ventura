import React from "react";
import SubTitle from "@/components/SubTitle";
export default function Inicial() {
    return (
        <>
            <div className="container-bg gap-10 rounded-md border-color border-2 flex flex-col w-full  items-start justify-start p-10 ">
                <div className="flex flex-col">
                    <h1 className="text-primary text-[30px] font-bold">
                        Sobre mim
                    </h1>
                    <SubTitle subTitle="Conheça um Pouco da Minha História." />
                </div>
                <div>
                    <p className=" text-tertiary font-normal indent-8 break-all whitespace-normal">
                        Olá! Sou Thais Ventura, desenvolvedora front-end apaixonada por criar experiências digitais únicas e funcionais.
                    </p>
                    <p className=" text-tertiary font-normal indent-8 break-all whitespace-normal">
                        Com experiência em JavaScript, TypeScript, React.JS, Next.JS e Node.JS, atuo na cidade de Fortaleza, Ceará. Tenho uma sólida formação em Análise e Desenvolvimento de Sistemas pela Universidade de Fortaleza - UNIFOR, e diversas certificações em tecnologias como Node.js, Next.js e React.
                    </p>
                    <p className=" text-tertiary font-normal indent-8 break-all whitespace-normal">
                        Minha trajetória inclui desenvolvimento e implementação de sites, focando em usabilidade e design intuitivo. Em projetos anteriores, liderei a criação de novos sistemas internos para empresas, utilizando ferramentas e frameworks como Next.js, TypeScript, React.js e Styled Components.
                    </p>
                    <p className=" text-tertiary font-normal indent-8 break-all whitespace-normal">
                        Minha experiência também inclui atuação como Designer de Interface do Usuário e como Desenvolvedora Front-end e Designer de Experiência do Usuário, onde desenvolvi protótipos e realizei testes de usabilidade para melhorar a experiência do usuário.
                    </p>
                    <p className=" text-tertiary font-normal indent-8 break-all whitespace-normal">
                        Sou entusiasta de novas tecnologias e estou sempre em busca de aprimorar minhas habilidades e conhecimentos. Conecto-me frequentemente com a comunidade de tecnologia através do meu LinkedIn e compartilho meus projetos no GitHub.
                    </p>
                </div>
                <div className="flex flex-row w-full justify-around py-10">
                    <div className="flex flex-col ">
                        <h1 className="text-[32px] font-extrabold text-[#9C42AB] ">
                            2+
                        </h1>
                        <p className="text-tertiary">
                            Anos de Experiência
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[32px] font-extrabold text-[#9C42AB]">
                            5+
                        </h1>
                        <p className="text-tertiary">
                            Projetos realizados
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[32px] font-extrabold text-[#9C42AB]">
                            3
                        </h1>
                        <p className="text-tertiary">
                            Empresas trabalhadas
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
