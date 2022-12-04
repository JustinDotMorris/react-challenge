import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

const App = () => {
  //variables
  let greetingImage = sunrise;
  let user = { firstName: "John", lastName: "Smith" };
  let timeOfDay = "morning";

  //figure out current time
  const currentHour = new Date().getHours();
  console.log(currentHour);

  //time of day after 1am
  if (currentHour > 1) {
    greetingImage = sunrise;
    timeOfDay = "Morning";
  }
  //time of day after 11am
  if (currentHour > 11) {
    greetingImage = sun;
    timeOfDay = "Afternoon";
  }
  //time of day after 5pm
  if (currentHour > 17) {
    greetingImage = moon;
    timeOfDay = "Evening";
  }

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Hello World</h1>
        <img
          src={greetingImage}
          alt={greetingImage}
          className="greeting__img"
        />
        <h2>Good {timeOfDay}!</h2>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </header>
    </div>
  );
};

export default App;
