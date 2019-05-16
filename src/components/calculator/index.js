import React, {Component, Fragment} from 'react';
import './calculator.scss';

class Calculator extends Component{
    constructor(props){
        super(props)

        this.state={
            calcItems: [],
            equalClick: 0,
            numberClicked: false,
            opClick: false,
            decimalClicked: false,
            answer: 0
        }

        this.handleNumber= this.handleNumber.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
        this.handleExport = this.handleExport.bind(this);
        this.handleOps = this.handleOps.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.clearDigits = this.clearDigits.bind(this);
        this.percent = this.percent.bind(this);
    }

    handleNumber(event){
        const number = event.target.value;
        const {calcItems, equalClick } = this.state;

        if(equalClick >= 1){
            this.resetAll();
            this.pushCalcItems(number);
        } else if ( !isNaN(calcItems[calcItems.length-1]) && equalClick < 1){
            const addon = calcItems[calcItems.length-1] + number;
            let newarr = [...calcItems];
            newarr.splice(calcItems.length-1, 1, addon)
            this.setState({
                calcItems: newarr
            })
        } else {
            this.pushCalcItems(number);
        }

        this.setState({
            numberClicked: true,
            opClick: false
        })
    }

    pushCalcItems(item){
        this.setState({
            calcItems: [...this.state.calcItems, item]
        })
    }

    handleDecimal(){
        const {numberClicked, decimalClicked, opClick, calcItems} = this.state;

        if(numberClicked && !decimalClicked){
            const decimal = calcItems[calcItems.length-1] + ".";
            let newarr = [...calcItems];
            newarr.splice(calcItems.length-1, 1, decimal)
            this.setState({
                calcItems: newarr,
            })
        } else if (opClick || !calcItems.length ||(!numberClicked && calcItems[calcItems.length-1][[calcItems.length-1].length-1] !='.')){
            this.pushCalcItems('0.');
        }

        this.setState({
            decimalClicked: true
        })
    }

    handleOps(event){
        const {calcItems} = this.state;
        const lastindex = calcItems[calcItems.length-1];

        if(!isNaN(lastindex)){
            this.pushCalcItems(event.target.id);
        } else if (isNaN(lastindex) && calcItems.length !=0){
            let newarr = [...calcItems];
            newarr.splice(calcItems.length-1, 1, event.target.id);
            this.setState({
                calcItems: newarr,
            })
        }

        this.setState({
            opClick: true,
            numberClicked: false,
            decimalClicked:false,
            equalClick:0
        })
    }

    handleEqual(){

        this.setState({
            equalClick: this.state.equalClick+1
        })

        let {calcItems} = this.state;

        if(!calcItems){
            this.pushCalcItems('0');
        } else if(calcItems.length){    
            this.mathFilter(calcItems);
        }
    }

    handleExport(){
        this.props.getAmount(this.state.answer);
    }

    mathFilter(arr){
        let arrformath = this.opSequenceAndParse(arr);
        let num1 = arrformath[0];
        let op, num2, answer;

        if(arrformath.length >= 3){
            for(let index=1; index < arrformath.length-1; index+=2){
                op = arrformath[index];
                num2 = arrformath[index+1];
                answer = this.doMath(num1, num2, op);
                num1= answer;
            }
        } else if(arrformath.length ===2){
            num2 = num1;
            op = arrformath[1];
            answer = this.doMath(num1, num2, op)
        } else if (arrformath.length ===1){
            answer = arrformath[0];
        }

        if(!isNaN(answer) && answer % 1 !== 0){
            answer = parseFloat(answer.toPrecision(8));
        }

        this.setState({
            calcItems: [answer],
            answer: answer
        })
    }

    opSequenceAndParse(arr){
        let answer;

        for(let index = 0; index < arr.length; index++){
            if(index % 2 == 0){
              arr[index] = parseFloat(arr[index]);  
            } else if((arr[index] === '*' || arr[index] === '/') && arr.length >2){
                let op = arr[index];
                let num1 = arr[index-1];
                let num2 = parseFloat(arr[index+1]);
                answer = this.doMath(num1, num2, op);
                arr.splice(index-1, 3, answer);
            }
        }
        return arr;
    }

    doMath(num1, num2, op){
        let answer;
        
        if( op ==='+'){
            answer = num1 + num2;
        } else if ( op === '-'){
            answer = num1 - num2;
        } else if ( op === '*'){
            answer = num1 * num2;
        } else if ( op === '/'){
            if(num2 === 0){
                answer = 'Error';
            } else {
                answer = num1 / num2;
            }
        }
        return answer;
    }

    resetAll(){

        this.setState({
            calcItems: [],
            equalClick: 0,
            numberClicked: false,
            opClick: false,
            decimalClicked: false,
            answer: null
        })
    }

    clearDigits(){
        const {calcItems, equalClick} = this.state;
        const lastIndex= calcItems[calcItems.length-1]+'';

        if(!isNaN(lastIndex) && lastIndex.length > 1){
            const sliceLast = lastIndex.slice(0,-1);
            let newarr = [...calcItems];
            newarr.splice(calcItems.length-1, 1, sliceLast);
            this.setState({
                calcItems: newarr
            })
        } else if (equalClick > 1){
            this.state({
                calcItems: []
            })
        } else {
            let newarr =[...calcItems];
            newarr.pop()
            this.setState({
                calcItems: newarr
            })
        }
    }

    percent(){
        const {calcItems} = this.state;
        const answer = calcItems[calcItems.length-1]/100;

        this.setState({
            calcItems: [answer],
            answer: answer
        })
    }

    render(){
        const {calcItems, equalClick} = this.state;
        const numbers =[7,8,9,4,5,6,1,2,3,0];
        const numberbtn = numbers.map(num=>{
            return(
                <div className="numberbtnContainer col s4" key={num}>
                    <button className="btn numberbtn" onClick={this.handleNumber} value={num}>{num}</button>                              
                </div> 
            )
        })

        return(
            <Fragment>
            <div className="calcbody col s12 m8">
                <div className="displayArea">
                    <div className="display col s12">
                        <p className="displayText">{calcItems.join("")}</p>
                    </div>
                </div>
                <div className="buttonsContainer col s12">
                    <div className="leftContainer col s8">
                        <div className="numberbtnBox">
                            <div className="clearbtnContainer col s4">
                                <button className="btn clearbtnC" onClick={this.resetAll}>AC</button> 
                             </div>   
                            <div className="clearbtnContainer col s4">
                                <button className="btn clearbtnCE" onClick={this.clearDigits}>CE</button>
                             </div>   
                            <div className="clearbtnContainer col s4">
                                <button className="btn percent" onClick={this.percent}>%</button>
                             </div>   
                            {numberbtn}
                            <div className="numberbtnContainer col s4">
                                <button className="btn" id="decimal" value="." onClick={this.handleDecimal}>.</button>                                
                            </div>
                            <div className="numberbtnContainer col s4">
                                <button className="btn" id="equalbtn" value="=" onClick={this.handleEqual}>=</button>
                            </div>
                        </div>
                    </div>
                    <div className="ops col s4">
                        <button className="btn opsbtn" id="/" onClick={this.handleOps}>&divide;</button>
                        <button className="btn opsbtn" id="*" onClick={this.handleOps}>&times;</button>
                        <button className="btn opsbtn" id="-" onClick={this.handleOps}>-</button>
                        <button className="btn opsbtn btnplus" id="+" onClick={this.handleOps}>+</button>                       
                    </div>
                </div>
            </div>
            <div className="export right">
                {equalClick? 
                <button className="btn export-answer" onClick={this.handleExport } title="Export answer to amount">
                <i className="fas fa-file-import"></i> Export
                </button>: null}
            </div>
            </Fragment>  
        )
    }
}

export default Calculator;