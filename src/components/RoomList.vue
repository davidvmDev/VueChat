<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Room List
        <b-link href="#/add-room">(Agregar Room)</b-link>
      </h2>
      <b-table striped hover :items="rooms" :fields="fields">
        <template slot="actions" slot-scope="row">
          <b-btn size="sm" @click.stop="join(row.item._id)">Unirse</b-btn>
          <b-btn size="sm" @click.stop="drop(row.item._id)">Borrar</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'RoomList',
  data () {
    return {
      fields: {
        room_name: { label: 'Nombre', sortable: true, 'class': 'text-center' },
        created_date: { label: 'Fecha de creación', sortable: true },
        actions: { label: 'Acciones', 'class': 'text-center' }
      },
      rooms: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/room`)
      .then(response => {
        this.rooms = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    join (id) {
      console.log(id)
      this.$router.push({
        name: 'JoinRoom',
        params: { id: id }
      })
    },
    drop (id) {
      axios.delete(`http://localhost:3000/api/room/` + id)
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
