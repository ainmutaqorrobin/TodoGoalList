import goalImage from "./assets/me.jpg";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import { useState } from "react";
import { CourseGoal } from "./interface";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    });
  }

  //take previous goals state and filter each element using id that does not same with id from arguement
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <div>
      <main>
        <Header image={{ src: goalImage, alt: "List of goals" }}>
          <h1>List of goal</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal} />
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </main>
    </div>
  );
}
