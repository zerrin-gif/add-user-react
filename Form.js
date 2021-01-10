import React, {Component} from 'react';
​
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            job: ''
        };
        this.lachin =this.lachin.bind(this);
    }
   lachin(e){
this.setState({
name: e.target.value
       })
   }
   lachin2 =(e)=>{
    this.setState({
    job: e.target.value
})
       }
sendName=()=>{
this.props.updateNames(this.state);
       }
    render() {
        const { name, job } = this.state; 
        return (
            <form>
             <h2>{this.state.name} {this.state.job}</h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                onChange={this.lachin} />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                     onChange={this.lachin2}/>
            <button type="button" onClick={this.sendName}>
                    Submit
                </button>
            </form>
​
        );
    }
}
​
export default Form;