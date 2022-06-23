import "./App.css";
import Hero from "./Components/Hero";
// import FRParentInput from "./Components/FRParentInput";
// import PortalDemo from "./Components/PortalDemo";
// import FocusInput from './Components/FocusInput';
// import RefsDemo from './Components/RefsDemo';
// import ParentComponent from './Components/ParentComponent';
// import FragmentDemo from './Components/FragmentDemo';
// import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo /> */}
      {/* <Table /> */}

      {/* <ParentComponent /> */}

      {/* <RefsDemo /> */}

      {/* <FocusInput /> */}

      {/* <FRParentInput /> */}

      {/* <PortalDemo /> */}

      <Hero heroName="Batman"/>
      <Hero heroName="Superman"/>
      {/* <Hero heroName="Joker"/> */}
    </div>
  );
}

export default App;
