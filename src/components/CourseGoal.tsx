interface CourseGoalProps {
  title: string;
  description: string;
}
export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
