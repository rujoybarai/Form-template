import { createContext } from "react";
import { useReducer } from "react";




export const Store = createContext(null);








   const FormReducer = (state, action) => {
    switch(action.type){
        case 'ADD_DETAILS':
            return(
              {
                ...state,
                Name:action.payload.Name,
                Username:action.payload.Username,
                Email:action.payload.Email,
                Password:action.payload.Password,
                Address1:action.payload.Address1,
                Address2:action.payload.Address2,
                City:action.payload.City,
                State:action.payload.State,
                Zip:action.payload.Zip,

              }
        )

        default:
            return state;
    }
}



export  const StoreProvider =({children})=>{


  const [FormData, dispatchFormData] = useReducer(FormReducer,[]);



   const AddDetails =(Name,UserName,Email,Password,Address1,Address2,City,State,Zip)=>{
      dispatchFormData({
        type:'ADD_DETAILS',
        payload:{ Name:Name,
          Username:UserName,
          Email:Email,
            Password:Password,
            Address1:Address1,
            Address2:Address2,
            City:City,
            State:State,
            Zip:Zip,}
        })

        
   }





return(
    <Store.Provider value={{FormData, dispatchFormData, AddDetails}} >
        {children}
    </Store.Provider>
)





}