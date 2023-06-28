const initialData={
    list: []
}

const todoReducers=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const{id,data}=action.payload;
            return{
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data: data
                    }
                ]
            }
            case "DELETE_TODO":
                const deleteId =action.payload;
                
                console.log('deleteId',deleteId);
                console.log(state.list)
                return{
                    ...state,
                   list: state.list.filter((data)=>{
                    return data.id !== deleteId
               })
                } 

                default: return state
    }

}
export default todoReducers;