# HTTP Test
[Network Research Lab] 컴퓨터네트워크 http 통신 구조 과제 출제을 위해 구축한 웹페이지. http통신 구조 파악이 과제의 목적이기 때문에 html만 사용하여 index 페이지와 404페이지를 만들었고, http로 배포하기 위해 AWS EC2를 통해 배포하였다.

<img src="https://user-images.githubusercontent.com/53554014/101783138-3b5e1f00-3b3d-11eb-8f53-283edad96b65.jpg" width=50% alt="main"></img><img src="https://user-images.githubusercontent.com/53554014/101783424-9abc2f00-3b3d-11eb-94bf-b9df6c727562.jpg" width=50% alt="404"></img>

### Express-generator
* port : 3000
* uri : /error, /users

### How to run on local
```
cd /server
npm start
```

## REMEMBER
* pm2 켜기
    - pm2 start npm -- start
    - pm2 list
    - pm2 stop ID(or 설정한 name)
    - pm2 stop all
    - pm2 restart all
* pm2 restart와 pm2 start의 차이?

### Ref
* [EC2 배포 AtoZ 1,2](https://victorydntmd.tistory.com/62?category=682759)
* [Express Docs](https://expressjs.com/ko/guide/routing.html)
* [Vue.js EC2에 배포하기](https://velog.io/@jdm1219/Express-EC2%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%B4%EB%B3%B4%EA%B8%B02-cxjxkae7hd)
* [React EC2에 배포하기 : git clone 이후로 많은 도움](https://eomtttttt-develop.tistory.com/207?category=873489)
* [pm2 사용법](https://jybaek.tistory.com/716)
* [EC2배포 시 겪는 문제점 정리](https://devlog-h.tistory.com/16)
