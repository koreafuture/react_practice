import logo from './logo.svg';
import './App.css';
function Header(props){
  return <header>
  <h1><a href="/">{props.title}</a></h1>
</header>
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function Nav(props){
  const lis = [
   
  ]
  for(let i =0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>,
    <li key={t.id2}>{t.body}</li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function App() {
  const topics = [
    {id:1,id2:4, title:'html', body:'htlm is ....'},
    {id:2,id2:5, title:'css', body:'css is ....'},
    {id:3,id2:6, title:'js', body:'js is ....'}
  ];
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="WECOME" body="BODYDY"></Article>
    </div>
    
  );
}

export default App;
