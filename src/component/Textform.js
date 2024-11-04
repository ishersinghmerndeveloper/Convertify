import React,{useState} from 'react'

export default function Textform(props) {
  
  // CONVERT TO UPPERCASE //
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");    
  }

  // CONVERT TO LOWERCASE //
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerercase!","success");  
  }

  //CLEAR ALL TEXT FUNCTION
  const clearall = () => {
    let newText = "";
    if (newText === "")
    {
      alert("Warning: You want to delete all text")
    }
    setText(newText);    
  }

  // COPY ALL FUNCTION
  const copyall = () => {
    let text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!","success");  
  }

  // REMOVE EXTRA SPACES FUNCTION 
  const removespace =() => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");  
  }


  // HANDLE CHANGE EVENT LISTEN //
  const handleonchange = (event) => {
    setText(event.target.value);
  }
  
  const [text, setText] = useState("");
  
  // text = "new text"; // Wrong way to use the usestate 
  // SetText("new text"); // Correct way to use the usestate

      
  return (
    <> 
    <div className="container">
        <h1>{props.heading}</h1>
        <div div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
          <button className="btn btn-primary" onClick={uppercase}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-3" onClick={lowercase}>Convert to Lowercase</button>
          <button className="btn btn-danger" onClick={clearall}>Clear all</button>
          <button className="btn btn-success mx-3" onClick={copyall}>Copy</button>
          <button className="btn btn-primary" onClick={removespace}>Remove space</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p> {text.split(" ").length} Words {text.length} Character</p>
      <p> { 0.008* text.split(" ").length} Minutes</p>
      <p>{text}</p>
    </div>
    </>
  )
}
