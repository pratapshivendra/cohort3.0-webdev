let cnt = 0;

const counter = () => {
    cnt++;
    console.log(cnt);
}

setInterval(counter,1000);