import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {

  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // PLACEHOLDER
  const cubeSurface = new Surface(
    SIZE,
    SIZE,
    Surface.SurfaceShape.Flat,
  );
  cubeSurface.setAngle(-1 * Math.PI / 2, 0);
  r360.renderToSurface(
    r360.createRoot('Info', {}),
    cubeSurface,
  );

  r360.compositor.setBackground(r360.getAssetURL('scene.jpg'));
}

window.React360 = {init};
