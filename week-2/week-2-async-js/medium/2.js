const clocking = () => {
    const now = new Date();

    let hr = now.getHours().toString().padStart(2,'0');
    let hrs12 = ((now.getHours()+11)%12+1).toString().padStart(2,'0');
    let min = now.getMinutes().toString().padStart(2,'0');
    let sec = now.getSeconds().toString().padStart(2,'0');

    const ampm = now.getHours()>=12? 'pm':'am';
    console.log(`${hrs12}:${min}:${sec} ${ampm}`);
    setTimeout(clocking, 1000);
}

clocking();
