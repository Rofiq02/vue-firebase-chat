<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Add Room 
                <b-link @click="$router.go(-1)">(Room List)</b-link>
            </h2>
            <b-jumbroton>
                <b-form @submit="onSubmit">
                    <b-form-group>
                        <b-form-input id="roomname" v-model.trim="room.roomName" placeholder="Enter Room Name"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary" :disabled="!room.roomName">Save</b-button>
                </b-form>
            </b-jumbroton>
        </b-col>
    </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
    name: 'AddBoard',
    data (){
        return{
            ref: firebase.database().ref('chatrooms/'),
            room: { roomName: '' }
        }
    },
    methods: {
        onSubmit (evt){
            evt.preventDefault()

            let newData = this.ref.push()
            newData.set({
                roomName: this.room.roomName
            })
            router.go(-1)
            .catch((error) =>{
                alert("Error", error)
            });
        }
    }
}
</script>

<style>
    .jumbroton{
        padding: 2rem;
    }
</style>