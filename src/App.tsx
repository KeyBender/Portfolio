import { Nav } from "./components/nav/nav";
import { Banner } from "./components/banner/banner";
import { Projects } from "./components/projects/projects";

export { App };

function App(): React.ReactElement {
  return (
    <div className="bg-[#e6e6e6] h-[100vh]">
      <Nav />
      <Banner />
      <Projects />
    </div>
  );
}
