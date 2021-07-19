function App () {
return (
<div> 
<Nav />
</div>
);
}
function Nav() {
return (
    <nav>
<h1>logo goes here</h1>
<ul>
    <li>main page</li>
    <li>product</li>
    <li>about</li>
</ul>
    </nav>
)
}
ReactDOM.render(<App/>,document.querySelector("#main"));
