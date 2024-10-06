import SkillCart from "../_components/SkillCart";
import { baseURL } from "../_components/utils/baseURL";
import skillsStyle from "../styles/skills.module.css";

export default async function Skills() {
  try {
    const response = await fetch(`${baseURL}/skills`, { cache: 'no-store' });

    if (!response.ok) {
      console.error('Failed to fetch skills:', response.statusText);
      return <div><h1>Failed to load skills</h1></div>;
    }

    const skills = await response.json();

    if (!skills || skills.length === 0) {
      return <div><h1>No skills available</h1></div>;
    }

    return (
      <div className={skillsStyle.skills}>
        <h1>Skills</h1>
        {skills.map((item) => (
          <SkillCart key={item.id} item={item} />
        ))}
      </div>
    );
  } catch (error) {
    console.log(error)
    {return <div><h1>Failed to load skills</h1></div>}
  }
}
