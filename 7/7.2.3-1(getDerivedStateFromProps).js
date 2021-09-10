static getDerivedStateFromProps(nextPrps,prevState){
    if(nextProps.value!==prevState.value){
        return {value:nextProps.value};
    }
    return null; //state를 변경할 필요한 없다면 null을 반환.
}