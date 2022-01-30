const element = (
    <div id="main">
        <div id="name">
            <h1>Piyush Sunil Rane</h1>
        </div>
        <div id="img">
            <img id="imgID" src="image.jpeg" alt="My Photo" width="250" height="250"></img><br/><br/>
        </div>
        <div id="intro">
            Full Stack development and Data Engineering enthusiast. Currently pursuing Masters degree in Computer 
            Science.<br/>
  
        </div>
        <div id="git">
            <a id="gitID" href="https://github.com/ranepiyush">VIEW MY GITHUB REPO</a>
        </div>
    </div>
  )
   
  ReactDOM.render(element, document.getElementById('contents'));