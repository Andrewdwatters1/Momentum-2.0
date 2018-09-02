import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, ToastStore } from 'react-toasts';

// import AddPhoto from './AddPhoto';
// import AddQuote from './AddQuote';
import ComboItem from './ComboItem';
import { getAllCombos, getAllFavorites } from '../redux/reducer';

class AllQuotes extends Component {
  constructor() {
    super()
    this.state = {
      resultsPerPage: 15,
      page: 0,
      allCombos: [],
      pageCombos: [],
      faves: false,
    }
  }

  loadItems = () => {
    let result = [];
    let end = ((this.state.page + 1) * this.state.resultsPerPage) + this.state.resultsPerPage;
    end = (end > this.state.allCombos.length ? this.state.allCombos.length : end);
    for (let i = 0; i < end; i++) {
      if (!this.state.faves) {
        result.push(
          <ComboItem
            imgsrc={this.state.allCombos[i].url}
            quote={this.state.allCombos[i].quote}
            photoId={this.state.allCombos[i].id}
            id={i}
          />
        )
      } else {
        this.props.getAllFavorites(this.props.user.id).then(response => {
          result.push(
            <ComboItem
              imgsrc={response.value.data[i].url}
              quote={response.value.data[i].quote}
            />
          )
        }).catch(error => {
          console.log('error propigating favorites', error)
          ToastStore.error("Oops... there was an issue 😬 We're on it!")
        })
      }
      this.setState({
        pageCombos: result,
        page: this.state.page + 1
      })
    }
  }
  displayFavorites = () => {
    if (this.props.user) {
      this.props.getAllFavorites(this.props.user.id).then(response => {
        let faves = response.value.data;
        if (faves.length) {
          let result = [];
          for (let i = 0; i < faves.length; i++) {
            result.push(
              <ComboItem
                imgsrc={faves[i].url}
                quote={faves[i].quote}
              />
            )
          }
          this.setState({
            pageCombos: result,
            faves: !this.state.faves
          })
        } else {
          ToastStore.error("Looks like you don't have any favorites yet 🤔")
        }
      }).catch(error => {
        ToastStore.error("Hmm... weren't able to display favorites 😥 ")
        console.log('error displaying favorites', error)
      })
    } else {
      ToastStore.error("Please login to view your favorites 😜")
    }
  }
  displayMainPhotos = (initial) => {
    this.props.getAllCombos().then(response => {
      let result = [];
      let start = this.state.page * this.state.resultsPerPage;
      let end = (this.state.page * this.state.resultsPerPage) + this.state.resultsPerPage;
      for (let i = start; i < end; i++) {
        result.push(
          <ComboItem
            imgsrc={response.value[i].url}
            quote={response.value[i].quote}
            photoId={response.value[i].id}
            id={i}
            allCombos={this.state.allCombos}
          />
        )
      }
      if(initial) {
        this.setState({
          allCombos: response.value,
          pageCombos: result,
          faves: !this.state.faves
        })
      } else {
        this.setState({
          allCombos: response.value,
          pageCombos: result
        })
      }
    })
  }

  componentDidMount = () => {
    this.displayMainPhotos(false);
  }

  render() {
    console.log(this.state)
    let { pageCombos } = this.state;
    return this.state.pageCombos[0] ?
      (
        <div>
          <div className="quotes-grid-container">
            {pageCombos}
          </div>
          {
            this.state.faves
              ?
              <i className="fas fa-camera" onMouseDown={this.displayMainPhotos}></i>
              :
              <div>
                <i className="fas fa-heartbeat" onMouseDown={this.displayFavorites}></i>
                <i id="loadMore-button" className="fas fa-arrow-alt-circle-down" onMouseDown={this.loadItems}></i>
              </div>
          }
        </div>
      )
      :
      null
  }
}

const mapStateToProps = state => {
  return {
    comboList: state.comboList,
    favoritesList: state.favoritesList,
    user: state.userInfo
  }
}

export default connect(mapStateToProps, { getAllCombos, getAllFavorites })(AllQuotes);