import React from 'react';
import ReactDOM from 'react-dom/client';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   )

//   return (
//     <div>
//       Hello Jason
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );

    return (
      <div>
        Hello Jason
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
