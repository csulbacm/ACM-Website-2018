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
    'https://i.pinimg.com/originals/0d/10/c5/0d10c50facbcf34473c30b146d000d6c.jpg',
    'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/public/images/GoogleMeeting.jpg',
    'https://raw.githubusercontent.com/csulbacm/ACM-Website-2018/master/public/images/GBM.jpg'
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
              <img style={{width: '100vw', height: '95vh', objectFit: 'cover'}} src={image} alt={`slide${index}`}/>
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
