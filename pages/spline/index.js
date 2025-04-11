import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Index() {
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerAnimation() {
    spline.current.emitEvent('mouseHover', 'Cube');
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={onLoad}
      />
      <button type="button" onClick={triggerAnimation}>
        Trigger Spline Animation
      </button>
    </div>
  );
}