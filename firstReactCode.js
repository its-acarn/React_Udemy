function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your age: {props.age}</p>
      </div>
    );
  }
  
  var app = (
    <div>
      <Person name="Max" age ="28"/>
      <Person name="Andy" age ="21"/>
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));