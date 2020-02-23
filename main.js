import axios from "axios";

let QOTD = axios.get("https://quotes.rest/qod");

console.log(QOTD);
const quote = document.querySelector(h1);
quote.textContent = QOTD;
