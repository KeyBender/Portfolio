import { Element } from "../layouts/element";
import movieFindImg from "./assets/movie-find.png";
import { Card } from "./card";

export { Projects };

function Projects(): React.ReactElement {
  return (
    <Element name="projects" className="mt-6">
      <h1 className="text-center font-logo underline underline-offset-4 md:no-underline md:mx-72 md:border-b-2">
        Projects
      </h1>
      <div className="flex justify-center p-6">
        <div className="grid grid-cols-1 gap-3 md:gap-14 md:grid-cols-2">
          <Card>
            <div className="p-6">
              <h1 className="font-bold text-xl">MovieFind</h1>
              <p className="break">
                Find any movie available on all available streaming platforms.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Element>
  );
}
