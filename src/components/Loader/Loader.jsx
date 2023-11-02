import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     position: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //   }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="green"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
