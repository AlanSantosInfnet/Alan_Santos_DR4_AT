<template>
    <div class="list row">
      <div class="col-md-6">
        <h4>Lista de Livros</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(lista, index) in list"
            :key="index"
            @click="setActiveList(lista, index)"
          >
            {{ "Título: " + lista.title + " | Autor(a): " + lista.autor }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllList">
          Remover Tudo
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentList">
          <List-details
            :lista="currentList"
            @refreshList="refreshList"
          />
        </div>
        <div v-else>
          <h4>Detalhes do Livro</h4>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ListDataService from "../services/ListDataService";
  import ListDetails from "./List";
  
  export default {
    name: "book-list",
    components: { ListDetails },
    data() {
      return {
        list: [],
        currentList: null,
        currentIndex: -1
      };
    },
    methods: {
      onDataChange(items) {
        let _listas = [];
  
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _listas.push({
            key: key,
            title: data.title,
            autor: data.autor,
            description: data.description,
            published: data.published,
          });
        });
  
        this.list = _listas;
      },
  
      refreshList() {
        this.currentList = null;
        this.currentIndex = -1;
      },
  
      setActiveList(list, index) {
        this.currentList = list;
        this.currentIndex = index;
      },
  
      removeAllList() {
        ListDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      ListDataService.getAll().on("value", this.onDataChange);
    },
    beforeDestroy() {
      ListDataService.getAll().off("value", this.onDataChange);
    }
  };
  </script>