import { ReactNode } from "react";
import { CourseGoalListProps } from "../interface";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  let warningBox: ReactNode;
  const message = ` You're having a lot of goals. Don't put too much!`;

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet, start addding some!</InfoBox>
    );
  }
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        {message}
      </InfoBox>
    );
  }
  if (goals.length >= 5) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        {message}
      </InfoBox>
    );
    if (goals.length >= 6) {
      warningBox = (
        <InfoBox mode="warning" severity="high">
          {message}
        </InfoBox>
      );
    }
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
