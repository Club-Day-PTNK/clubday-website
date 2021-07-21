import teamStyles from "../../styles/about/Team.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(teamStyles);

const Team = ({ teamName, selected = false }) => {
  let containerClass = cx({ container: true, selected: selected });
  return (
    <div className={containerClass}>
      <div className={teamStyles.head}>{teamName}</div>
    </div>
  );
};
export default Team;
