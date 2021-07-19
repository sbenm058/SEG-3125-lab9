import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {connect} from "react-redux";
import "../styles/home.css" 


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



class Home extends Component {
    
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
                    var elems = document.querySelectorAll('.tooltipped');
                    M.Tooltip.init(elems, {});
        });
    }

    render(){
        const {recipes}=this.props;

        const breakfast = (
            recipes.map(item => {
                if (item.car_category==="breakfast") {
                    return (
                        <div>
                            <Link to={"/en/"+item.name}>
                                <div className="image_container">
                                    <img src={item.image}/>
                                </div>
                                <div>
                                <span className="itemname">{item.name}</span>
                                </div>
 
                            </Link>
                        </div>
                            
                        
                      )
                }
                return null;
            })
          );

          const lunch = (
            recipes.map(item => {
                if (item.car_category==="lunch") {
                    return (

                            <Link to={"/en/"+item.name}>
                                <div className="image_container">
                                    <img src={item.image}/>
                                </div>
                                <span className="itemname">{item.name}</span>
                            </Link>
                        
                      )
                }
                return null;
            })
          );

          const dinner = (
            recipes.map(item => {
                if (item.car_category==="dinner") {
                    return (

                            <Link to={"/en/"+item.name}>
                                <div className="image_container">
                                    <img src={item.image}/>
                                </div>
                                <span className="itemname">{item.name}</span>
                            </Link>
                 
                      )
                }
                return null;
            })
          );

        return(
            <div className="container">
                <span class="title"><h2>Recipes</h2></span>
                <br/>
                <h4>Breakfast</h4>
                    <Carousel responsive={responsive} infinite={true}>
                        {breakfast}
                    </Carousel>
                <br/>
                <h4>Lunch</h4>
                    <Carousel responsive={responsive} infinite={true}>
                        {lunch}
                    </Carousel>
                    <br/>
                <h4>Dinner</h4>
                    <Carousel responsive={responsive} infinite={true}>
                        {dinner}
                    </Carousel>
                    <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps) (Home)