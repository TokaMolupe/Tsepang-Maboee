import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import "./GalleryWidget.css";

const images = [
    {
        original: "/images/gallery/one.jpg",
        thumbnail: "/images/gallery/one.jpg",
    },
    {
        original: "/images/gallery/two.jpg",
        thumbnail: "/images/gallery/two.jpg",
    },
    {
        original: "/images/gallery/three.jpg",
        thumbnail: "/images/gallery/three.jpg",
    },
    {
        original: "/images/gallery/four.jpeg",
        thumbnail: "/images/gallery/four.jpeg",
    },
    {
        original: "/images/gallery/seven.jpeg",
        thumbnail: "/images/gallery/seven.jpeg",
    },
];

function GalleryWidget() {
    return (
        <div className="gallery-container">
            <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay={true}
                slideInterval={2000}
                showThumbnails={false}
                lazyLoad={true}
            />
        </div>
    );
}

export default GalleryWidget;