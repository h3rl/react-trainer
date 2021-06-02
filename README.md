# react-trainer

## initalization
my react trainer

init react app:
> npx create-react-app APPNAME

download required node-packages:
> npm install

start:
> cd APPNAME<br>
> npm run start

### performance tests
If you want to start measuring performance in your app, pass a function<br>
to log results (for example: reportWebVitals(console.log))<br>
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


### react imports:
setState is like a variable accesable from dom elements and dynamic
> [var, setvar] = setState(INITVALUE)
useEffect runns on every rerender of the dom. passing empty array as second arg makes it run only once.
> useEffect(()=>{ }) runs everytime<br>
> useEffect(()=>{ }, []) runs one time only<br>
> useEffect(()=>{ }, [VAR]) runs everytime VAR changes<br>


## Routing with react
> npm install react-router-dom -s <br>
