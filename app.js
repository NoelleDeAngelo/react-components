var GroceryList = (props)=> (
  <ul>
    {props.items.map(item => <GroceryListItem item = {item}/>)}
  </ul>

);





class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bold: false
    }
  }

  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    }
    return <li style = {style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut = {this.onListItemHover.bind(this)}>{this.props.item}</li>
  }
}

ReactDOM.render(<GroceryList items = {['Corn', 'Jam']}/>, document.getElementById("app"));
