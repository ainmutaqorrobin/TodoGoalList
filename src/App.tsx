import CourseGoal from "./components/CourseGoal";
import goalImage from "./assets/goals.jpg";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <main>
        <Header image={{ src: goalImage, alt: "List of goals" }}>
          <h1>List of goal</h1>
        </Header>
        <CourseGoal title="Tajuk">
          <p>children paragraph</p>
        </CourseGoal>
      </main>
    </div>
  );
}
