import { Component } from 'react';
import { Circles } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div>
        <Circles
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
}

export default Loader;
