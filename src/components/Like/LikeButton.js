import React, { Component } from 'react';

export default class LikeButton extends Component{
    render(){
        return (
        <>
            <button>Like</button>
        </>
        )
    }
}

// import React, { useState } from 'react';

// const LikeButton = () => {

//     // state = {
//     //     counter: 0
//     // }

//     const [counter, setCounter] = useState(0)

//         return (
//         <div>
//             <button onClick={() => setCounter(counter + 1)}>Like</button>
//             <p>count: {counter}</p>
//         </div>
//         )
// }

// export default LikeButton