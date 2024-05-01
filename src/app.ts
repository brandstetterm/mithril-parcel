import m from 'mithril';

function FormComponent() {
  let username = "";
  let password = "";

  function setUsername(value: string) {
    username = value;
  }

  function setPassword(value: string) {
    password = value;
  }

  function onSubmit() {
    console.log("Username", username, "Password", password);
  }

  return {
    view: function() {
      return m("form", {class: "flex flex-col gap-4 items-center bg-red-100 p-8 rounded w-96"}, [
        m("input[type=text]", {
          oninput: function(e) {setUsername(e.target.value)},
          value: username
        }),
        m("input[type=password]", {
          oninput: function(e) { setPassword(e.target.value)},
          value: password
        }),
        m("button[type=submit]", {onclick: onSubmit}, "Submit")
      ]);
    }
  }
}

function ComponentWithState() {
  var count = 0;
  
  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }

  return {
    oninit: function() {
      console.log("Init component");
    },
    view: function() {
      return m("div", {class: "flex gap-4"}, [
        m("button", {onclick: decrement}, "Minus"),
        m("span", count),
        m("button", {onclick: increment}, "Plus")
      ]);
    }
  }
}

var RootComponent = {
  view: function() {
    return m("main", [
      m("h1", {class: "text-3xl"}, "Hello World"),
      m("p", "Lorem Ipsum"),
      m(ComponentWithState),
      m(FormComponent),
    ])
  }
}

m.route(document.querySelector("#root")!, "/", {
  "/": RootComponent
})
