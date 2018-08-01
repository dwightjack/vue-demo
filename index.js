new Vue({
    el: "#app",
    data: {
      text: "",
      items: []
    },
    methods: {
      add() {
        this.items.push(this.text);
        this.text = "";
      }
    }
  });
  