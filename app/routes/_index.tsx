import Projects from "~/components/organisms/Projects";
import { MetaFunction } from "@remix-run/react";
import { Skills } from "~/components/organisms/Skills";
import { Header } from "~/components/organisms/Header";
import { Hero } from "~/components/organisms/Hero";
import { About } from "~/components/organisms/About";
import { WorkExperiences } from "~/components/organisms/WorkExperiences";
import { Educations } from "~/components/organisms/Educations";
import { LicensesAndCertifications } from "~/components/organisms/LicensesAndCertifications";

export const meta: MetaFunction = () => {
  return [{ title: "Akhmad Nur H" }];
};

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1a] text-white">
      <Header />
      <main className="flex flex-1 justify-center py-5 md:px-10 lg:px-40 px-4">
        <div className="flex w-full max-w-4xl flex-col">
          <Hero />
          <About />
          <WorkExperiences />
          <Educations />
          <LicensesAndCertifications />
          <Skills />
          <Projects />
        </div>
      </main>
    </div>
  );
};

export default App;
