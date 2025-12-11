import DependencyEffect from "./components/DependencyEffect";
import EveryRender from "./components/EveryRender";
import IntervalExample from "./components/IntervalExample";
import RunOnce from "./components/RunOnce";
import Users from "./components/Users";
import WindowSize from "./components/WindowSize";


export default function App() {
    return (
        <div className="p-10 flex items-center justify-center">
            {/* <EveryRender /> */}
            {/* <RunOnce /> */}
            {/* <DependencyEffect /> */}
            {/* <IntervalExample /> */}
            {/* <WindowSize /> */}
            <Users />
        </div>
    );
}