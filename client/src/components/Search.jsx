import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            artist: '',
            duration: 0,
            albumArt: '',
            genre: ''
        }
    }

    handleChangeArtist(e) {
        e.preventDefault();
        this.setState({artist: e.target.value});
    };

    handleChangeTrack(e) {
      e.preventDefault();
      this.setState({title: e.target.value});
    };

    handleSubmitHere(e) {
      e.preventDefault();
      this.props.addToList(this.state);  
    };

    render(){
        return(
          <div>
            <form>
              <input 
               type='text' 
               onChange={this.handleChangeArtist.bind(this)}
               value = {this.state.artist}
               placeholder = 'Artist'
               className='formstyle'
              />
            </form>
            <form>
              <input 
                type='text' 
                onChange={this.handleChangeTrack.bind(this)}
                value = {this.state.title}
                placeholder='Track'
                className = 'formstyle'
              />
            </form>
            <input className='submitButton' type="button" value="Add Track" onClick={this.handleSubmitHere.bind(this)}/>
          </div>
            
        );
    }
}

export default Search;