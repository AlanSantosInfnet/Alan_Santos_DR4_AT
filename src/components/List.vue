<template>
    <div v-if="currentList" class="edit-form">
      <h4>Detalhes do Livro</h4>
      <form>
        <div class="form-group">
          <label for="title">Título</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentList.title"
          />
        </div>
        <div class="form-group">
          <label for="autor">Autor</label>
          <input
            type="text"
            class="form-control"
            id="autor"
            v-model="currentList.autor"
          />
        </div>
  
  
        <div class="form-group">
          <label for="description">Descrição</label>
          <textarea
            name="description"
            cols="5" 
            rows="5"
            class="form-control"
            id="description"
            v-model="currentList.description"

          ></textarea>
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentList.published ? "Enviado" : "Pendente" }}
        </div>
      </form>
  
      <button
        class="btn btn-outline-info mr-3"
        v-if="currentList.published"
        @click="updatePublished(false)"
      >
        Não Enviado
      </button>
      <button
        v-else
        class="btn btn-outline-info mr-3"
        @click="updatePublished(true)"
      >
        Enviar
      </button>
  
      <button class="btn btn-outline-danger mr-3" @click="deleteList">
        Deletar
      </button>
  
      <button type="submit" class="btn btn-outline-success" @click="updateList">
        Atualizar
      </button>
      <p>{{ message }}</p>
    </div>
  </template>

  <script>
  import ListDataService from "../services/ListDataService";
  
  export default {
    name: "lista",
    props: ["lista"],
    data() {
      return {
        currentList: null,
        message: "",
      };
    },
    watch: {
      lista: function(list) {
        this.currentList = { ...list };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        ListDataService.update(this.currentList.key, {
          published: status,
        })
          .then(() => {
            this.currentList.published = status;
            this.message = "Status atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateList() {
        const data = {
          title: this.currentList.title,
          description: this.currentList.description,
        };
  
        ListDataService.update(this.currentList.key, data)
          .then(() => {
            this.message = "Lista atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteList() {
        ListDataService.delete(this.currentList.key)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentList = { ...this.lista }
    },
  };
  </script>