import Button from "./Button";

function App() {
  return (
    <div className="App">
      <div className="flex min-h-screen items-center justify-center bg-blue-600">
        <div className="row space-x-2">
          <Button variant="bg-red-700" text="Buy Now" />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
