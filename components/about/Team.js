import teamStyles from "../../styles/about/Team.module.scss";
import Member from "./Member";
import classNames from "classnames/bind";
let cx = classNames.bind(teamStyles);

const Team = ({ teamName, teamMembers, selected = false }) => {
  let containerClass = cx({ container: true, selected: selected });
  return (
    <div className={containerClass}>
      <div className={teamStyles.head}>{teamName}</div>
      <div className={teamStyles.body}>
        {Object.keys(teamMembers).map((name) => (
          <Member
            name={name}
            classYear={teamMembers[name].classYear}
            avatar={teamMembers[name].icon}
          />
        ))}
      </div>
    </div>
  );
};
export default Team;
