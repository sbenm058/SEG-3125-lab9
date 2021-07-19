import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../styles/recipe.css" 


class RecipeFr extends Component {

    render(){
        const ingredientList=this.props.recipe.ingredientsfr.split(",");
        const ingredientTable=ingredientList.map(ing =>{
            return(
                <div>
                    {ing}
                </div>
            )
        });

        const stepList=this.props.recipe.stepsfr.split(",");
        const stepTable=stepList.map(step =>{
            return(
                <div>
                    {step}
                </div>
            )
        });
        

        const recipe=this.props.recipe ? (
            
                <div class="recipeDetail">
                    <br/>
                    <br/>
                    <h2>{this.props.recipe.namefr}</h2>

                     <img src={this.props.recipe.image}/>

                     <div className="ingTable">
                        <span><h5>{ingredientTable}</h5> </span> 
                     </div>
                     <div className="stTable">
                         <span><h5>{stepTable}</h5></span> 
                     </div>
                     
                </div>

                
            
        ):null;

        return(
            <div className="container" >
                {recipe}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.recipeName;
    console.log(id);
    console.log(state.recipes);
    return {
        recipe: state.recipes.find(recipe => recipe.namefr === id)
    }
}



export default connect(mapStateToProps) (RecipeFr)