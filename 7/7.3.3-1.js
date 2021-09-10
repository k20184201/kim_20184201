import { render } from "@testing-library/react";

render(){
    console.log('render');

    const style={
        color: this.props.color
    };
    return(
        <div>
            {this.props.missing.value}
            <h1 style={style}ref={ref=>(this.myRef=ref)}>
                {this.state.number}
            </h1>
            <p>
                color:{this.state.color}
            </p>
            <button onClick={this.handleClick}>더하기</button>
        </div>
    );
}