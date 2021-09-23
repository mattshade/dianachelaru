import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
  return (
    <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic={true}
        licenseKey={'F216EF00-0E0049AE-8C365905-B584B23C'}
    >
        
    </LightGallery>
  );
}



  export default Gallery;