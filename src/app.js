var RootComponent = {
  view: function() {
    return m("main", [
      m("h1", "Hello World"),
      m("p", "Lorem Ipsum")
    ])
  }
}

m.route.mode = "hash"
m.route(document.querySelector("#root"), "/", {
  "/": RootComponent
})
