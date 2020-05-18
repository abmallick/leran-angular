import { Like } from './like'

let like = new Like(10, false);
function click() {
    like.count += (like.state) ? -1 : 1;
    like.state = !like.state
}

click()
console.log(`likes : ${like.count} state: ${like.state}`)