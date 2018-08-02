const Item = {
    props: {
        text: String
    },
    template: `
    <transition name="item">
        <li class="list-group-item">{{text}}</li>
    </transition>
    `,
    // methods: {
    //     onEnter(el, done) {
    //         TweenMax.from(el, 0.2, {
    //             y: -5,
    //             autoAlpha: 0,
    //             onComplete: () => done()
    //         })
    //     }
    // }
}

const AddForm = {
    template: `
    <form @submit.prevent="add">
        <div class="form-group">
            <input class="form-control" type="text" v-model="text">
        </div>
        <button class="btn btn-primary" type="submit" :disabled="text.length < 1">Add</button>
    </form>
    `,
    data: () => ({ text: '' }),
    props: {
        onSubmit: Function
    },
    methods: {
        add() {
            this.onSubmit(this.text)
            this.text = ''
        }
    }
}
new Vue({
    el: "#app",
    data: {
      items: []
    },
    components: {
        Item,
        AddForm
    },
    methods: {
      addItem(value) {
        this.items.push(value);
      }
    }
  });
  