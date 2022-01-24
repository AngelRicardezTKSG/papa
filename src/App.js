import "./App.css";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./helpers/firebaseInit";


function App() {
  useEffect(() => {
  }, []);
                         
  const handleSubmitContactForm = (values) =>{
    return addDoc(collection(db,"contacts"),values)
  }
  
  return (
    <div className="App">
      <ContactForm onSubmit={handleSubmitContactForm} />
    </div>
  );
}

export default App;
