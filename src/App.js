import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LabeledCheckBox from './LabeledCheckBox';
import ScrollPhotos from './ScrollPhohtos';

class App extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
            images: [
                'http://static.espreso.tv/uploads/article/211035/images/im578x383-main.jpg',
                'http://lutsk.rayon.in.ua/upload/news/1/2016-06/146567405114/t_1__mg_6136.jpg',
                'http://fakty.ictv.ua/wp-content/uploads/2017/03/28/upld_1863-e1490699998699.jpg',
                'https://www.depo.ua/static/files/gallery_uploads/images/kotionok_-snoopy6.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Large_Siamese_cat_tosses_a_mouse_while_lying.jpg/640px-Large_Siamese_cat_tosses_a_mouse_while_lying.jpg'
            ],
            i: 0
        }

    }

    handleChange(e) {
        this.setState({
            label: e.target.value
        });
    }

    scrollNext() {
        let i = this.state.i;
        const img = this.state.images;
        if(i !== img.length-1) {
            i++;
            this.setState({
                i: i
            })
        }
    }

    scrollPrevious () {
        let i = this.state.i;
        if(i > 0) {
            i--;
            this.setState({
                i: i
            })
        }
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="LabelBox">
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                    <LabeledCheckBox labelText={this.state.label}/>
                    <ScrollPhotos scrollNext={this.scrollNext.bind(this)} scrollPrevious={this.scrollPrevious.bind(this)} img={this.state.i}
                                  images={this.state.images}/>
                </div>
            </div>
        );
    }
}

export default App;
