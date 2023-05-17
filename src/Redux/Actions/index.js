export const addCart = (e) => {
    return{
        type : "addItem",
        payload : e
    }
}
export const delCart = (e) => {
    return{
        type : "delItem",
        payload : e
    }
}