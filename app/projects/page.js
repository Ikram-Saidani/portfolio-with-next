import ProjectCart from "../_components/ProjectCart";
import { baseURL } from "../_components/utils/baseURL";
import projectsStyle from "../styles/projects.module.css"
export default async function Projects() {
  try {
    const response = await fetch(`${baseURL}/projects`, { cache: 'no-store' });

    if (!response.ok) {
      console.error('Failed to fetch projects:', response.statusText);
      return <div><h1>Failed to load projects</h1></div>;
    }

    const projects = await response.json();

    if (!projects || projects.length === 0) {
      return <div><h1>No projects available</h1></div>;
    }

    return (
      <>
      <h1 style={{textTransform:"capitalize",margin:"20px 0",textAlign:"center"}}>Projects</h1>
      <div className={projectsStyle.projects}>
        
        {projects.map((item) => (
          <ProjectCart key={item.id} item={item} />
        ))}
      </div>
      
      
</>
    );
  } catch (error) {
    console.log(error)
    {return <div><h1>Failed to load projects</h1></div>}
  }
}
