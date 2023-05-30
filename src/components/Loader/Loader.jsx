import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <ThreeDots
          height="100"
          width="100"
          radius="9"
          color="#e3174d"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
