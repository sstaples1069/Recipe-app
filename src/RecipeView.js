import React from "react";

function RecipeView({recipes, handleDelete}) {
   
    return (        
            <tr key={recipes.name}>
              <td>{recipes.name}</td>
              <td>{recipes.cuisine}</td>
              <td><img src={recipes.photo}/></td>
              <td className="content_td"><p>{recipes.ingredients}</p></td>
              <td className="content_td"><p>{recipes.preparation}</p></td>
              <td><button name="delete" onClick={handleDelete}>Delete</button></td>
            </tr>
    )    

}

export default RecipeView;