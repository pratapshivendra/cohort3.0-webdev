let cnt = 0;

const counter = () => {
    cnt++;
    console.log(cnt);
    setTimeout(counter,1000);
}

setTimeout(counter,1000);