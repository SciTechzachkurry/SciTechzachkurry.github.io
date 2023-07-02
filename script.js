(async () => {
  
  const fetched = await fetch("rhymers.ilanbernstein.repl.co/design");

const json = await fetched.json();

const res = document.getElementsById("res");

res.innerText = json;
})();
