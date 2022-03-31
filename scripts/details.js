import { getRepoInfo } from "../helpers/getInfo.js";
import { ShowInfo } from "../modules/showInfo.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios');
let numberRepo = document.getElementById('number-repos');
let detalleIzquierda = document.getElementById('izquierda')


document.addEventListener('DOMContentLoaded', async () => {
  let userName = localStorage.getItem('user');

  let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
    .then(res => res)
  let info = await getRepoInfo(`https://api.github.com/users/${userName}`)
    .then(res => res)

  showRepoInfo(repos, contenedorRepos, numberRepo);
  ShowInfo(info, detalleIzquierda)
})