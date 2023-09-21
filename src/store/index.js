
import { defineStore } from 'pinia'
import axios from "axios"

//Exporting a const that makes my store and i called it user
export const UserStore = defineStore("user", {
  //Defining my users state
    state: () => ({
        users: [],
    }),
    //Defining my getters and returning all the users in my state
    getters: {
      getUsers(state){
          return state.users
        }
    },

    //Defining my actions 
    actions: {
      //Making a async function
      async fetchUsers() {
        //Making a try catch if an error is happening it will alert
        try {
          //Getting the data and putting it in my state
          const data = await axios.get('http://localhost:3000/')
            this.users = data.data
          }
          catch (error) {
            //Alerting if an error occurs
            alert(error)
            console.log(error)
        }
      },
    },
})