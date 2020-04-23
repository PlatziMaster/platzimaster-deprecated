import React, { useState } from 'react';
import swal from 'sweetalert';

const ShareButton = ({ title, description, url }) => {
  const [modal, setModal] = useState(false);

  const handleShare = () => {
    if (navigator.share !== undefined) {
      navigator.share({
        title,
        text: description,
        url
      })
        .catch(error => swal("Error al compartir", "error"));
    } else {
      setModal(!modal);
    }
  };

  const copyLink = () => {
    url.toString();
    navigator.clipboard.writeText(url).then(function () {
      swal("Url copiada", `${url}`, "success");
    }, function () {
      swal("Error al copiar la url", "error");
    });
  };

  return (
    <div className="blogpost__share">
      <button onClick={handleShare}>
        <img src="https://arepa.s3.amazonaws.com/master-share.png" alt="Share Icon" />
        <p>Compartir</p>
      </button>
      {
        modal &&
        <>
          <div className="blogpost__share-modal">
            <a
              href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
              target="_blank"
              rel="noopener noreferrer"
              data-show-count="false"
            >
              <img
                src="https://arepa.s3.amazonaws.com/master-twitter.png"
                alt="Share for Twitter"
                onClick={() => setModal(!modal)}
              />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}&display=popup`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://arepa.s3.amazonaws.com/master-facebook.png"
                alt="Share for Facebook"
                onClick={() => setModal(!modal)}
              />
            </a>
            <img
              src="https://arepa.s3.amazonaws.com/master-copylink.png"
              alt="Copy Link"
              onClick={() => { copyLink(); setModal(!modal); }}
            />
          </div>
          <span className="blogpost__share-modalsquare"></span>
        </>
      }
    </div>
  );
};

export default ShareButton;
