import React, { useState } from "react";

function RecipeCreate({ addARecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleInput(e) {
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //add the if statement here?
    console.log(formData);
    addARecipe(formData);
    setFormData(initialFormData)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInput}
                placeholder="Name"
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleInput}
                placeholder="Cuisine"
              ></input>
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleInput}
                placeholder="URL"
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInput}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                value={formData.preparation}
                onChange={handleInput}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
