import Header from "@/components/header";
import SideMenu from "@/components/SideMenu";
import Inicial from "./Inicial";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";
import Projetos from "./Projetos";
export default function Home() {
  return (
    <>
  
      <Header />
    <main className="container-bg flex flex-row justify-between p-5 gap-2 w-h-[100vh]">
      <SideMenu />
      <div className="flex flex-col gap-2">
      <Inicial />
      <Habilidades />
      <Experiencia />
      <Projetos />
      </div>
    </main>
    </>
  );
}
