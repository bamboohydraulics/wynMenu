let root = document.getElementById('root')
const drawElement =(menuItem)=> {
    let div = document.createElement('div')
    let template = `
    <header>
    <h1> ${menuItem.name}</h1>
    </header>
    <img src="http://placehold.it/280x70" alt ="Image for sub">
    <h2> $1250</h2>
    <ul>
    <li> ingredient 1</li>
    <li> ingredient 2</li>
    </ul>
    `
    div.innerHTML = template
    root.appendChild(div)
}
menuItems.forEach(drawElement)