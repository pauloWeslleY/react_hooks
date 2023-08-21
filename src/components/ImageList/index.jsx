import './ImageList.css'

export const ImageList = props => {
  const images = props.images.map(image => (
    <div key={image.id}>
      <img src={image.largeImageURL} alt="banner" />
    </div>
  ))

  return (
    <section>
      <div className="titleHero">
        <h2>We have {images.length} images</h2>
      </div>

      <div className="containerImage">{images}</div>
    </section>
  )
}
