const cart = []

const HandleCart = (state = cart,action) => {
    const e = action.payload;
    switch (action.type){
        case "addItem":
            const exist = state.find((x) => x.id === e.id)
            if(exist){
                console.log("Wdwdwdwdwd")
                return state.map((x) => x.id === e.id ? {...x, qty : x.qty+1} : x)
            }
            else{
                const e = action.payload
                return[
                    ...state,
                    {
                        ...e,qty:1
                    }
                ]
        }
        case "delItem":
            const b = action.payload
            console.log(b.qty)
            if(b.qty === 1){
                const a = state.filter((at) => at.id != e.id)
                return a
            }
            else{
                return state.map((x) => x.id === e.id ? {...x, qty : x.qty-1} : x)
            }    
        default:
            return state
            break
    }
}

export default HandleCart