import { CourseGoalProps } from "../interface";

export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <button onClick={() => props.onDeleteGoal(props.id)}>Delete</button>
    </article>
  );
}
