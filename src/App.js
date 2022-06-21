import "./App.css";
import Buttons from "./components/buttons/Buttons";
import Cell from "./components/Cell/Cell";

function App() {
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            <Buttons />
        </>
    );
}

export default App;
