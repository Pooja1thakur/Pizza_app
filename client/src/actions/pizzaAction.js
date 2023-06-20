import axios from "axios";

export const getAllPizzas=()=>dispatch=>{
    dispatch({type:'GET_PIZZAS-REQUETS'})
try{
    const response=axios.get('/api/pizzas/getpizzas')
    console.log(response)
    dispatch({type:'GET_PIZZAS-SUCCESS',payload:response.data})
}
catch(errror){
    dispatch({type:'GET_PIZZAS-FAILED',payload:errror})

}




}