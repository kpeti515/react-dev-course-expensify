console.log('App.js is running!')

// JSX JavaScript XML
const app = {
  title: 'Indecision app',
	subtitle: 'put your hand into in the hands of a computer',
	options: []
}
const onFormSubmit = (e) => {
	e.preventDefault()
	const option = e.target.elements.option.value

	if (option) {
		app.options.push(option)
		e.target.elements.option.value = ''
		//renderList()
		renderChanges()
	}
}
const wipe = () => {
	app.options = []
	renderChanges()
}
// const renderList = () => {
// 	app.options.map((option) => {
// 		return <p key={number}>Number: {number}</p> 
// 	})
// }

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length)
	const option = app.options[randomNum]
	alert(option)
}

const renderChanges = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options:' : 'You have no options'}</p>
			<button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={wipe}>Remove all</button>
			<ol>
			{
				app.options.map((option) => <li key={option}>option: {option}</li>)
			}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add option</button>
			</form>
		</div>
	)
	ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')
renderChanges()