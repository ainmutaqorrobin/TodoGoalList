import { type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
}
export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <button>Delete</button>
    </article>
  );
}
