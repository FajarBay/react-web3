import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : "IpRed",
      color : "Merah",
      img   : "red.jpg",
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name : menu.name,
      color : menu.color,
      img   : menu.img,
    });
  }
  /*menusaya() {
    var gambar;
      if(this.state.active.toLowerCase() === 'merah'){
        gambar = "red";
      }else if(this.state.active.toLowerCase() === 'kuning'){
        gambar = "yellow";
      }else if(this.state.active.toLowerCase() === 'hijau'){
        gambar = "green";
      }else if(this.state.active.toLowerCase() === 'biru'){
        gambar = "blue";
      }
    return <img src = {gambar+".jpg"} width = "200px"></img>
  }*/
  menusaya() {
    return <img src={this.state.color+".jpg"} width ="200px"></img>
  }
  render() {
    return (
      <div id="app">
        {/* map akan loop sebanyak menu yang didefinisikan*/}
        {/* kemudian mengembalikan elemen <a/> */}
        <nav className="nav">{this.props.items.map((menu,index) => {
            var style = 'menu';

            if(this.state.color === menu.color) {
                style = `${style} is-active`;
            }

            return <a
              className = {style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,menu)}
              key = {index}
            >
              {menu.name}
            </a>;
          }
        )}
        </nav>

        <div className = "info">
          Iphone <span className = {"selected "+this.state.color}>
          {this.state.color}
          {/*ganti nama tinggal ubah color jadi name*/}
          </span><br></br>
          <br></br>

          <img src = {this.state.img} width="200"></img>
          {/*{this.menusaya()}*/}

        </div>

        {/*<div className = "gambar">
          <span className = {"pic "+this.state.active}></span>
        </div>*/}

      </div>
    );
  }
}

export default App;
