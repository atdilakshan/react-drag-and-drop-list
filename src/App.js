// components
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header>
        <h1 class="title">Drag And Drop List</h1>
        <h3 class="profile">
          Created By
          <a
            href="https://atdilakshan.github.io"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            AT Dilakshan
          </a>
        </h3>
      </header>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h2>Board 1</h2>
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <h2>Board 2</h2>
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>

        <Board id="board-3" className="board">
          <h2>Board 3</h2>
          <Card id="card-3" className="card" draggable="true">
            <p>Card Three</p>
          </Card>
        </Board>

        <Board id="board-4" className="board">
          <h2>Board 4</h2>
          <Card id="card-4" className="card" draggable="true">
            <p>Card Four</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
