import { FunctionComponent } from "react";
import { Category } from "../types";
import { ProjectNavItem } from "./ProjectNavItem";


const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavItem value="all" {...props} />
      <ProjectNavItem value="react" {...props} />
      <ProjectNavItem value="mongo" {...props} />
      <ProjectNavItem value="next js" {...props} />
      <ProjectNavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
