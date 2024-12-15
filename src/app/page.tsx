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
        <SideMenu className="sticky top-0 self-start" />
        <div className="flex flex-col gap-10 w-full">
          <div id="inicial">
            <Inicial />
          </div>
          <div id="habilidades">
            <Habilidades />
          </div>
          <div id="experiencia">
            <Experiencia />
          </div>
          <div id="projetos">
            <Projetos />
          </div>
        </div>
      </main>
    </>
  );
}
