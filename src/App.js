import logo from './logo.svg';
import './css/main.css';
import './css/index.css';
import chevrons from "./img/chevrons.png";
import chat from "./img/chat.png";
import Article from './Article';
import Projects from './Projects';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
    <div>
  <div className="container">
    <Header/>
    <div className="row banner">
      <div className="col-12 bannerH1"><h1>I’m Ryan, software engineer and interface designer.</h1></div>
    </div>
    <div className="row about">
      <div className="col-12"><p>I specialize in rapidly prototyping software companies and web applications. I talk about my journey on <a href="#" className="twitter">Twitter</a>, commit code to <a href="#" className="github">Github</a>, and take shots on <a href="#" className="dribbble">Dribbble</a>.</p>
      </div></div>
    <div className="row articles">
      <div className="row headArticles">
        <div className="col-4"><h3>Latest Articles</h3></div>
        <div className="col-2"> <a  href="#"><h3 className="AllArt">All articles <img src={chevrons} /></h3></a></div>
      </div>
      <div className="row wrapArticles">
        <Article title="Reducing cognitive load by theming my tools" date="September 08, 2019" type="js"/>
        <Article title="Reducing cognitive load by theming my tools" date="September 09, 2019" type="react"/>
        <Article title="Reducing cognitive load by theming my tools" date="September 10, 2020" type="js"/>
        
      </div>
    </div>
    <Projects/>
  </div>
  <div className="container-fluid ">
    <div className="contact">
      <div className="row"><div className="col-6 p0"><h1>What are you working on?</h1></div></div>
      <div className="row"><div className="col-4"><p>Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.</p></div></div>
      <div className="row"><div className="col-auto"><a><img src={chat}  /><p>Chat</p></a></div></div>
    </div>
  </div>
  <Footer/>
</div>

  );
}

export default App;
