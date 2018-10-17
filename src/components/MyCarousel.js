import React from 'react'
import { Carousel } from 'react-bootstrap'
// import { connect } from 'react-redux'
// import moment from 'moment'
// import { startAddMainCarouselImage } from '../actions/mainCarousel'
// import Dropzone from './Dropzone'
// import CarouselSlider from './CarouselSlider'
// import Dropzone2 from './Dropzone2'
// import Slideshow from './Slideshow'

class MyCarousel extends React.Component {

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     slideIndex: '1'
  //   }
  // }

  images = [
    'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=623ed05afcc5a3fa1e444ffca95854dc&w=1000&q=80'
  ]

  // onAfterChange = (slideIndex) => {
  //   this.setState(() => ({ slideIndex }),
  //   () => {
  //     // console.log(this.state.slideIndex, ' : ', slideIndex)
  //   }
  //   )
  // }

  render() {
    return (
      <div style={this.props.style}>
        <Carousel>
        {
          this.images &&
          this.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img style={{width: '100vw', height: '50vh', objectFit: 'cover'}} src={image} alt={`slide${index}`}/>
            </Carousel.Item>
          )
        )}
        </Carousel>
      </div>
      // <CarouselSlider
      // afterChange={this.onAfterChange}
      // images={this.images}
      // />
        // <Dropzone2
        //   style={this.props.style}
        //   onSubmit={(base64) => {
        //     this.props.dispatch(startAddMainCarouselImage(base64))
        //   }}
        // >
        // </Dropzone2>
    )
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//     images: state.mainCarouselImages
//   }
// }

export default MyCarousel



// <Dropzone
// onSubmit={(base64) => {
//   this.props.dispatch(startAddMainCarouselImage(base64))
// }}
// />
