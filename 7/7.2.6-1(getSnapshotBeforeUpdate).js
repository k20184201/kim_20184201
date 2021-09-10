getSnapshotBeforeUpdate(prevProps,prevState){
    if(prevState.array !==this.state.array){
        const{scrollTop,scrollHeight}=this.list 
        return{scrollTop,scrollHeight};
    }
}