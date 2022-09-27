<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Titulo</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="list.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="autor">Autor(a)</label>
        <input
          type="text"
          class="form-control"
          id="autor"
          required
          v-model="list.autor"
          name="autor"
        />
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea
          cols="5" 
          rows="5"
          class="form-control"
          id="description"
          required
          v-model="list.description"
          name="description"
        ></textarea>
      </div>

      <button @click="saveList" class="btn btn-success">Cadastrar</button>
    </div>

    <div v-else>
      <h4>Cadastro Realizado Com Sucesso!</h4>
      <button class="btn btn-success" @click="newList">Cadastrar Nova Lista</button>
    </div>
  </div>
  </template>
  
  <script>
  import ListDataService from "../services/ListDataService";
  
  export default {
    name: "add-tutorial",
    data() {
      return {
        list: {
          title: "",
          autor: "",
          description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveList() {
        var data = {
          title: this.list.title,
          autor: this.list.autor,
          description: this.list.description,
          published: false
        };
  
        ListDataService.create(data)
          .then(() => {
            console.log("Novo Item criado com sucesso");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newList() {
        this.submitted = false;
        this.list = {
          title: "",
          autor: "",
          description: "",
          published: false
        };
      }
    }
  };
  </script>