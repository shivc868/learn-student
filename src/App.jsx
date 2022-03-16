import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FaqSection from "./FaqSection";
function App() {
  const numb = [
    {
      id: 1,
      title: "First",
      names: [
        {
          name: "abc",
        },
        {
          name: "xyz",
        },
      ],
    },
    {
      id: 2,
      title: "Second",
      names: [
        {
          name: "abc",
        },
        {
          name: "xyz",
        },
      ],
    },
    {
      id: 3,
      title: "Third",
      names: [
        {
          name: "abc",
        },
        {
          name: "xyz",
        },
      ],
    },
    {
      id: 4,
      title: "Fourth",
      names: [
        {
          name: "abc",
        },
        {
          name: "xyz",
        },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        {numb.map((item, i) => (
          <>
            <div key={i}>
              <span> {i} </span>
              <span> {item.title} </span>
              <span> {item.id} </span>
              <div>
                {item.names.map((name, index) => (
                  <h4>
                    {" "}
                    {name.name} {index}{" "}
                  </h4>
                ))}
              </div>
              <br />
            </div>
          </>
        ))}
      </div>
      <FaqSection />
    </>
  );
}

export default App;
