// const heading = React.createElement("h1", {class:'heading'}, "Hello world from react!")

const parent = React.createElement(
   "div",
   {id: "parent"},
   [React.createElement("h1", {}, "I'm an H1 tag"), React.createElement("h2", {}, "I'm an H2 tag")]
   
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);