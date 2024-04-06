import { SanitationForm } from "./frontend/sanitationForm.tsx";
import {FakeNavBar} from "./frontend/fakeNavBar.tsx";

function App() {
    return (
        <>
            <div>
                <FakeNavBar />
                <SanitationForm />
            </div>
        </>
    )
}

export default App