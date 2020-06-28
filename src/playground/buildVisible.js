class VisibilityToggle extends React.Component {
	constructor(props){
		super(props)
		this.toggleVisibility = this.toggleVisibility.bind(this)
		this.state = {
			visibility: false
		}
	}
	toggleVisibility(){
		this.setState( (previousState) => {
			return{
				visibility: !previousState.visibility
			}
		})
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleVisibility}>
				{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				{this.state.visibility && (
					<div>
						<p>Hey. These are some drtails you can now see!</p>
					</div>
				)}
			 </div>
		)
	}
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))
// const appRoot = document.getElementById('app')
// const app = {
//     title: 'Visibility toggle',
//     details: 'asdsadsa'
// }
// const button = ['Show details', 'Hide details']
// let visibility = false
// // JSX JavaScript XML

// const showHide = () => {
//    visibility = !visibility
// 	renderChanges()
// }


// const renderChanges = () => {
// 	const jsx = (
// 		<div>
// 			<h1>{app.title}</h1>
//             <button onClick={showHide}>
//                 {visibility? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && <p>These are some details you can now see</p>}
// 		</div>
// 	)
// 	ReactDOM.render(jsx, appRoot)
// }


// renderChanges()