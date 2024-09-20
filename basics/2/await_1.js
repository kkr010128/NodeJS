async function init(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch: 네트워크를 통해 서버의 자료를 가져오는 함수
    const users = await response.json(); // await를 통해 정보가 가져오늘 것이 완료될 때까지 대기
    console.log(users);
}

init();