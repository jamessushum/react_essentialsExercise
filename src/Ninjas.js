import React from 'react';

// destructuring the props being passed in, using an anonymous function in line 12 so deleteNinja function won't automatically fire since the parenthesis is used to pass in the id (we want it to run when delete button is clicked)
const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ ninja.id }>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        </div>
      )
    } else {
      return null
    }
  })

  return  (
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas