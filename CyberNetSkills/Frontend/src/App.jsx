import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;